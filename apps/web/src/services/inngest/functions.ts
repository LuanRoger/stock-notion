import { EnvVariableNotSetError } from "@/models/errors";
import { createNotionClient } from "../notion/client";
import {
  getDataSourceRowIds,
  updateDataSourcePageProperties,
} from "../notion/index";
import { inngest } from "./client";
import { updateDataSourceFiisPropertiesSchema } from "./schemas";
import {
  FiiData,
  NotionReducePropertiesOptions,
  Properties,
  PropertiesOptions,
} from "@/models/notion";
import { mergePropertiesNameOption } from "@/utils/object";
import { lower } from "@/utils/string";
import { fiiDataToPageProperty } from "@/utils/properties";

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
    const baseUrl = process.env.FII_API_URL;
    const apiKey = process.env.FII_API_KEY;
    if (!notionSecret) {
      throw new EnvVariableNotSetError("NOTION_INTEGRATION_SECRET");
    }
    if (!baseUrl) {
      throw new EnvVariableNotSetError("FII_API_URL");
    }
    if (!apiKey) {
      throw new EnvVariableNotSetError("FII_API_KEY");
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

    const { fiis, dataSourcePropertiesName } = await step.run(
      "get-fiis-in-notion",
      async () => {
        const fiis = await getDataSourceRowIds(
          client,
          dataSourceId,
          rowIdColumnName,
        );
        const dataSourcePropertiesName =
          mergePropertiesNameOption(dataSourceColumns);

        return { fiis, dataSourcePropertiesName };
      },
    );

    const properties: Properties = {};
    await Promise.all(
      fiis.map(async (fii) => {
        const fiiId = lower(fii);
        const url = `${baseUrl}/fiis/${fiiId}`;

        const response = await step.fetch(url, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });

        const data: FiiData = await response.json();
        properties[fiiId] = fiiDataToPageProperty(
          data,
          dataSourcePropertiesName,
        );
      }),
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
