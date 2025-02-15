import { updateDatabasePagePropertiesValidator } from "@/middlewares/validators";
import { createNotionClient } from "@/modules/notion";
import { updateDatabasePageProperties } from "@/modules/notion/database";
import { Hono } from "hono";

const routes = new Hono<{ Bindings: CloudflareBindings }>();

routes.post(
  "/:databaseId",
  updateDatabasePagePropertiesValidator,
  async (c) => {
    const notionSecret = c.env.NOTION_INTEGRATION_SECRET;
    if (!notionSecret) {
      return c.status(500);
    }

    const notionClient = createNotionClient(notionSecret);
    const databaseId = c.req.param("databaseId");
    const body = c.req.valid("json");

    await updateDatabasePageProperties(notionClient, databaseId, body);

    return c.status(201);
  }
);

export default routes;
