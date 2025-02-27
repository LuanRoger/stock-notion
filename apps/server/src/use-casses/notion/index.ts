import {
  getDatabaseRowIds,
  updateDatabasePageProperties,
} from "@/modules/notion/database";
import { Client } from "@notionhq/client";
import { getFiiById } from "../status-invest/fiis";
import { getFiagroById } from "../status-invest/fiagro";
import type {
  Properties,
  PropertiesNameOption,
  PropertiesOptions,
} from "@/models/properties-options";
import { DEFAULT_PAGE_PROPERTIES_NAME } from "@/constants";
import { fiiDataToPageProperty } from "@/models/mappers/properties";
import { lower } from "@/utils/string";
import type { NotionReducePropertiesOptions } from "@/models/utils-options";
import { FiNotFound } from "@/models/errors";

export async function updateDatabaseFiisPageProperties(
  client: Client,
  databaseId: string,
  rowIdColumnName: string,
  propertiesNameOption?: PropertiesNameOption,
  reduceOptions?: NotionReducePropertiesOptions
) {
  const fis = await getDatabaseRowIds(client, databaseId, rowIdColumnName);

  const properties: Properties = {};
  for (const fi of fis) {
    const fiId = lower(fi);
    try {
      const fii = await getFiiById(fiId);
      properties[fiId] = fiiDataToPageProperty(
        fii,
        propertiesNameOption ?? DEFAULT_PAGE_PROPERTIES_NAME
      );
    } catch (error) {
      if (!(error instanceof FiNotFound)) {
        throw error;
      }
      const fiagro = await getFiagroById(fiId);
      properties[fiId] = fiiDataToPageProperty(
        fiagro,
        propertiesNameOption ?? DEFAULT_PAGE_PROPERTIES_NAME
      );
    }
  }

  const propertiesOptions: PropertiesOptions = {
    rowIdColumnName,
    properties,
  };
  console.log("updateDatabaseFiisPageProperties", propertiesOptions);
  await updateDatabasePageProperties(
    client,
    databaseId,
    propertiesOptions,
    reduceOptions
  );
}
