import { updateDatabaseFiisPropertiesValidator } from "@/middlewares/validators";
import { createNotionClient } from "@/modules/notion";
import { updateDatabaseFiisPageProperties } from "@/use-casses/notion";
import { Hono } from "hono";

const routes = new Hono<{ Bindings: CloudflareBindings }>();

routes.post(
  "/fiis/:databaseId",
  updateDatabaseFiisPropertiesValidator,
  async (c) => {
    const notionSecret = c.env.NOTION_INTEGRATION_SECRET;
    if (!notionSecret) {
      return c.text("Secret not set", { status: 500 });
    }

    const notionClient = createNotionClient(notionSecret);
    const databaseId = c.req.param("databaseId");
    const body = c.req.valid("json");

    await updateDatabaseFiisPageProperties(
      notionClient,
      databaseId,
      body.rowIdColumnName
    );

    return c.conten("OK", { status: 201 });
  }
);

export default routes;
