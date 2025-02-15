import {
  PagePropertyIdentifier,
  PropertiesOptions,
} from "@/models/properties-options";
import { Client } from "@notionhq/client";
import { updatePageProperty } from "./page";
import { isValidPage } from "@/utils/notion";

export async function getDatabaseRowIds(
  client: Client,
  databaseId: string,
  pageIdentifierInfo: PagePropertyIdentifier
) {
  const { rowId, rowIdColumnName } = pageIdentifierInfo;
  const database = await client.databases.query({ database_id: databaseId });

  const rowIds: string[] = [];
  for (const page of database.results) {
    const isValid = isValidPage(page, rowIdColumnName, rowId);
    if (!isValid) {
      continue;
    }

    const rowIdProperty = page.properties[rowIdColumnName];
    if (rowIdProperty.type !== "title") {
      return false;
    }

    const rowIdText = rowIdProperty.title[0].plain_text;
    rowIds.push(rowIdText);
  }

  return rowIds;
}

export async function updateDatabasePageProperties(
  client: Client,
  databaseId: string,
  properties: PropertiesOptions
) {
  const database = await client.databases.query({ database_id: databaseId });

  const updatePromises: Promise<void>[] = [];
  for (const page of database.results) {
    const isValid = isValidPage(
      page,
      properties.rowIdColumnName,
      properties.rowId
    );
    if (!isValid) {
      continue;
    }

    properties.properties.forEach((property) => {
      updatePromises.push(updatePageProperty(client, page.id, property));
    });
  }

  return Promise.all(updatePromises);
}
