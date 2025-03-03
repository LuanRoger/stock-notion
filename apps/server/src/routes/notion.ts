import { APP_RESPONSES, DEFAULT_NOTION_COLUMN_ID_NAME } from "@/constants";
import {
  notionDatabaseIdTicketValidator,
  notionDatabaseIdValidator,
  updateDatabaseFiisPropertiesHeadersValidator,
  updateDatabaseFiisPropertiesValidator,
} from "@/middlewares";
import { type NotionReducePropertiesOptions } from "@repo/shared/models";
import { createNotionClient } from "@/modules/notion";
import type { Env } from "@/types";
import {
  updateDatabaseFiisPageProperties,
  updateDatabaseFiTicketPageProperties,
} from "@/use-casses/notion";
import { Hono } from "hono";
import { env } from "hono/adapter";

const routes = new Hono<{ Bindings: Env }>();

routes.post(
  ":databaseId/:ticket",
  notionDatabaseIdTicketValidator,
  updateDatabaseFiisPropertiesValidator,
  updateDatabaseFiisPropertiesHeadersValidator,
  async (c) => {
    const { NOTION_INTEGRATION_SECRET: notionSecret } = env<{
      NOTION_INTEGRATION_SECRET: string;
    }>(c);
    if (!notionSecret) {
      return c.text(APP_RESPONSES.SECRET_NOT_SET, { status: 500 });
    }

    const notionClient = createNotionClient(notionSecret);
    const { databaseId, ticket } = c.req.valid("param");
    const body = c.req.valid("json");
    const { rowIdColumnName, databaseColumns } = body;
    const { TimeZone: timeZone } = c.req.valid("header");

    const reduceOptions: NotionReducePropertiesOptions = { timeZone };
    await updateDatabaseFiTicketPageProperties(
      notionClient,
      databaseId,
      rowIdColumnName ?? DEFAULT_NOTION_COLUMN_ID_NAME,
      ticket,
      databaseColumns,
      reduceOptions
    );

    return c.text(APP_RESPONSES.OK);
  }
);

routes.post(
  ":databaseId",
  notionDatabaseIdValidator,
  updateDatabaseFiisPropertiesValidator,
  updateDatabaseFiisPropertiesHeadersValidator,
  async (c) => {
    const { NOTION_INTEGRATION_SECRET: notionSecret } = env<{
      NOTION_INTEGRATION_SECRET: string;
    }>(c);
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
