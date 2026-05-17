import { EnvVariableNotSetError } from "@/models/errors";
import { createNotionClient } from "../notion/client";
import {
  getDataSourceRowIds,
  updateDataSourcePageProperties,
} from "../notion/index";
import { inngest } from "./client";
import { updateDataSourceFiisPropertiesSchema } from "./schemas";
import {
  NotionReducePropertiesOptions,
  Properties,
  PropertiesOptions,
} from "@/models/notion";
import { mergePropertiesNameOption } from "@/utils/object";
import { lower } from "@/utils/string";
import { getFiiById } from "@/app/actions/fii";
import { fiiDataToPageProperty } from "@/utils/properties";
import { getFiagroById } from "@/app/actions/fii";

export const processTask = inngest.createFunction(
  { id: "process-task", triggers: { event: "app/task.created" } },
  async ({ event, step }) => {
    const result = await step.run("handle-task", async () => {
      return { processed: true, id: event.data.id };
    });

    await step.sleep("pause", "1s");

    return { message: `Task ${event.data.id} complete`, result };
  },
);

export const updateNotionDataSourceFiisPageProperties = inngest.createFunction(
  {
    id: "update-notion-data-source-fiis-page-properties",
    triggers: { event: "app/data-source.update" },
  },
  async ({ event, step }) => {
    const notionSecret = process.env.NOTION_INTEGRATION_SECRET;
    if (!notionSecret) {
      throw new EnvVariableNotSetError("NOTION_INTEGRATION_SECRET");
    }
    const { success, data, error } =
      await updateDataSourceFiisPropertiesSchema.safeParseAsync(event.data);

    if (!success && error && !data) {
      throw new Error(error.message);
    }

    const client = createNotionClient(notionSecret);
    const { dataSourceId, dataSourceColumns, rowIdColumnName, headers } = data;
    const { timeZone } = headers ?? {};
    const reduceOptions: NotionReducePropertiesOptions = { timeZone };

    const fiis = await getDataSourceRowIds(
      client,
      dataSourceId,
      rowIdColumnName,
    );
    const dataSourcePropertiesName =
      mergePropertiesNameOption(dataSourceColumns);

    const properties: Properties = await step.run(
      "create-properties",
      async () => {
        const properties: Properties = {};
        for (const fii of fiis) {
          const fiiId = lower(fii);
          try {
            const fiiData = await getFiiById(fiiId);
            properties[fiiId] = fiiDataToPageProperty(
              fiiData,
              dataSourcePropertiesName,
            );
          } catch (error) {
            const fiagro = await getFiagroById(fiiId);
            properties[fiiId] = fiiDataToPageProperty(
              fiagro,
              dataSourcePropertiesName,
            );
          }
        }
        return properties;
      },
    );

    const propertiesOptions: PropertiesOptions = {
      rowIdColumnName,
      properties,
    };

    await step.run("update-data-source-page-properties", async () => {
      await updateDataSourcePageProperties(
        client,
        dataSourceId,
        propertiesOptions,
        reduceOptions,
      );
    });
  },
);
