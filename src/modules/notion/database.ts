import {
  PagePropertyIdentifier,
  PropertiesOptions,
} from "@/models/properties-options";
import { Client } from "@notionhq/client";
import { updatePageProperty } from "./page";
import { createFilterByRowId, isValidPage } from "@/utils/notion";

export async function getDatabaseRowIds(
  client: Client,
  databaseId: string,
  rowIdColumnName: string
) {
  const database = await client.databases.query({ database_id: databaseId });

  const rowIds: string[] = [];
  for (const page of database.results) {
    const isValid = isValidPage(page, rowIdColumnName);
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
  const { rowIdColumnName, properties: pageProperties } = properties;
  const pagesIdFilter = createFilterByRowId(rowIdColumnName, pageProperties);
  const database = await client.databases.query({
    database_id: databaseId,
    filter: {
      or: pagesIdFilter,
    },
  });

  const updatePromises: Promise<void>[] = [];
  for (const page of database.results) {
    const isValid = isValidPage(page, rowIdColumnName);
    if (!isValid) {
      continue;
    }

    if (page.properties[rowIdColumnName].type !== "title") {
      continue;
    }

    const rowId = page.properties[rowIdColumnName].title[0].plain_text;
    const pagePropertiesToUpdate = pageProperties[rowId];
    updatePageProperty(client, page.id, pagePropertiesToUpdate);
  }

  return Promise.all(updatePromises);
}
