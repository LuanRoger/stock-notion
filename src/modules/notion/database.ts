import { PropertiesOptions } from "@/models/properties-options";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Client } from "@notionhq/client";
import { updatePageProperty } from "./page";

export function getDatabaseById(client: Client, id: string) {
  return client.databases.retrieve({ database_id: id });
}

export async function updateDatabasePageProperties(
  client: Client,
  databaseId: string,
  properties: PropertiesOptions
) {
  const database = await client.databases.query({ database_id: databaseId });

  const updatePromises: Promise<void>[] = [];
  for (const page of database.results) {
    if (page.object !== "page") {
      continue;
    }

    const properPage = page as PageObjectResponse;
    const rowIdProperty = properPage.properties[properties.rowIdColumnName];
    console.log(rowIdProperty);
    if (rowIdProperty.type !== "title") {
      continue;
    }

    const rowId = rowIdProperty.title[0].plain_text;
    if (rowId !== properties.rowId) {
      continue;
    }

    properties.properties.forEach((property) => {
      updatePromises.push(updatePageProperty(client, page.id, property));
    });
  }

  return Promise.all(updatePromises);
}
