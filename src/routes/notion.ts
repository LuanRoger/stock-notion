import { APP_RESPONSES, DEFAULT_NOTION_COLUMN_ID_NAME } from "@/constants";
import {
  notionDatabaseIdValidator,
  updateDatabaseFiisPropertiesHeadersValidator,
  updateDatabaseFiisPropertiesValidator,
} from "@/middlewares/validators";
import { NotionReducePropertiesOptions } from "@/models/utils-options";
import { createNotionClient } from "@/modules/notion";
import { updateDatabaseFiisPageProperties } from "@/use-casses/notion";
import { Hono } from "hono";

const routes = new Hono<{ Bindings: CloudflareBindings }>();

routes.post(
  "/fiis/:databaseId",
  notionDatabaseIdValidator,
  updateDatabaseFiisPropertiesValidator,
  updateDatabaseFiisPropertiesHeadersValidator,
  async (c) => {
    const notionSecret = c.env.NOTION_INTEGRATION_SECRET;
    if (!notionSecret) {
      return c.text(APP_RESPONSES.SECRET_NOT_SET, { status: 500 });
    }

    const notionClient = createNotionClient(notionSecret);
    const { databaseId } = c.req.valid("param");
    const body = c.req.valid("json");
    const { rowIdColumnName, databaseColumns } = body;
    const { TimeZone: timeZone } = c.req.valid("header");

    const reduceOptions: NotionReducePropertiesOptions = { timeZone };
    await updateDatabaseFiisPageProperties(
      notionClient,
      databaseId,
      rowIdColumnName ?? DEFAULT_NOTION_COLUMN_ID_NAME,
      databaseColumns,
      reduceOptions
    );

    return c.text(APP_RESPONSES.OK);
  }
);

export default routes;
