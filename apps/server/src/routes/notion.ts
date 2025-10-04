import { APP_RESPONSES, DEFAULT_NOTION_COLUMN_ID_NAME } from "@/constants";
import {
  notionDataSourceIdTicketValidator,
  notionDataSourceIdValidator,
  updateDataSourceFiisPropertiesHeadersValidator,
  updateDataSourceFiisPropertiesValidator,
} from "@/middlewares";
import { type NotionReducePropertiesOptions } from "@repo/shared/models";
import { createNotionClient } from "@/modules/notion";
import type { Env } from "@/types";
import {
  updateDataSourceFiisPageProperties,
  updateDataSourceFiTicketPageProperties,
} from "@/use-casses/notion";
import { Hono } from "hono";
import { env } from "hono/adapter";

const routes = new Hono<{ Bindings: Env }>();

routes.post(
  ":dataSourceId/:ticket",
  notionDataSourceIdTicketValidator,
  updateDataSourceFiisPropertiesValidator,
  updateDataSourceFiisPropertiesHeadersValidator,
  async (c) => {
    const { NOTION_INTEGRATION_SECRET: notionSecret } = env<{
      NOTION_INTEGRATION_SECRET: string;
    }>(c);
    if (!notionSecret) {
      return c.text(APP_RESPONSES.SECRET_NOT_SET, { status: 500 });
    }

    const notionClient = createNotionClient(notionSecret);
    const { dataSourceId, ticket } = c.req.valid("param");
    const body = c.req.valid("json");
    const { rowIdColumnName, dataSourceColumns } = body;
    const { TimeZone: timeZone } = c.req.valid("header");

    const reduceOptions: NotionReducePropertiesOptions = { timeZone };
    await updateDataSourceFiTicketPageProperties(
      notionClient,
      dataSourceId,
      rowIdColumnName ?? DEFAULT_NOTION_COLUMN_ID_NAME,
      ticket,
      dataSourceColumns,
      reduceOptions
    );

    return c.text(APP_RESPONSES.OK);
  }
);

routes.post(
  ":dataSourceId",
  notionDataSourceIdValidator,
  updateDataSourceFiisPropertiesValidator,
  updateDataSourceFiisPropertiesHeadersValidator,
  async (c) => {
    const { NOTION_INTEGRATION_SECRET: notionSecret } = env<{
      NOTION_INTEGRATION_SECRET: string;
    }>(c);
    if (!notionSecret) {
      return c.text(APP_RESPONSES.SECRET_NOT_SET, { status: 500 });
    }

    const notionClient = createNotionClient(notionSecret);
    const { dataSourceId } = c.req.valid("param");
    const body = c.req.valid("json");
    const { rowIdColumnName, dataSourceColumns } = body;
    const { TimeZone: timeZone } = c.req.valid("header");

    const reduceOptions: NotionReducePropertiesOptions = { timeZone };
    await updateDataSourceFiisPageProperties(
      notionClient,
      dataSourceId,
      rowIdColumnName ?? DEFAULT_NOTION_COLUMN_ID_NAME,
      dataSourceColumns,
      reduceOptions
    );

    return c.text(APP_RESPONSES.OK);
  }
);

export default routes;
