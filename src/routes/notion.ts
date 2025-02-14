import { createNotionClient } from "@/modules/notion";
import { updateDatabasePageProperties } from "@/modules/notion/database";
import { Hono } from "hono";

const routes = new Hono<{ Bindings: CloudflareBindings }>();

routes.post("/:databaseId", async (c) => {
  const notionSecret = c.env.NOTION_INTEGRATION_SECRET;
  const notionClient = createNotionClient(notionSecret);
  const databaseId = c.req.param("databaseId");

  await updateDatabasePageProperties(notionClient, databaseId, {
    rowIdColumnName: "Nome do FII",
    rowId: "ITIP11",
    properties: [
      {
        name: "Quantidade de Cotas",
        type: "number",
        value: 10,
      },
    ],
  });

  return c.status(201);
});

export default routes;
