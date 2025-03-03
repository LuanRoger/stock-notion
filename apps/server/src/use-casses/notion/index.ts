import {
  getDatabaseRowIds,
  updateDatabasePageProperties,
} from "@/modules/notion/database";
import { Client } from "@notionhq/client";
import { getFiById } from "../status-invest/fiis";
import { getFiagroById } from "../status-invest/fiagro";
import type {
  Properties,
  PropertiesNameOption,
  PropertiesOptions,
} from "@/models/properties-options";
import { fiiDataToPageProperty } from "@/models/mappers/properties";
import { lower } from "@/utils/string";
import type { NotionReducePropertiesOptions } from "@repo/shared/models";
import { FiNotFound } from "@/models/errors";
import { mergePropertiesNameOption } from "@/utils/object";

export async function updateDatabaseFiisPageProperties(
  client: Client,
  databaseId: string,
  rowIdColumnName: string,
  propertiesNameOption?: PropertiesNameOption,
  reduceOptions?: NotionReducePropertiesOptions
) {
  const fis = await getDatabaseRowIds(client, databaseId, rowIdColumnName);
  const databasePropertiesName =
    mergePropertiesNameOption(propertiesNameOption);

  const properties: Properties = {};
  for (const fi of fis) {
    const fiId = lower(fi);
    try {
      const fiData = await getFiById(fiId);
      properties[fiId] = fiiDataToPageProperty(fiData, databasePropertiesName);
    } catch (error) {
      if (!(error instanceof FiNotFound)) {
        throw error;
      }
      const fiagro = await getFiagroById(fiId);
      properties[fiId] = fiiDataToPageProperty(fiagro, databasePropertiesName);
    }
  }

  const propertiesOptions: PropertiesOptions = {
    rowIdColumnName,
    properties,
  };
  await updateDatabasePageProperties(
    client,
    databaseId,
    propertiesOptions,
    reduceOptions
  );
}

export async function updateDatabaseFiTicketPageProperties(
  client: Client,
  databaseId: string,
  rowIdColumnName: string,
  ticket: string,
  propertiesNameOption?: PropertiesNameOption,
  reduceOptions?: NotionReducePropertiesOptions
) {
  const fiTicket = lower(ticket);
  const fiData = await getFiById(ticket);

  const pageProperties = fiiDataToPageProperty(
    fiData,
    mergePropertiesNameOption(propertiesNameOption)
  );
  const properties: Properties = {
    [fiTicket]: pageProperties,
  };

  const propertiesOptions: PropertiesOptions = {
    rowIdColumnName,
    properties,
  };
  await updateDatabasePageProperties(
    client,
    databaseId,
    propertiesOptions,
    reduceOptions
  );
}
