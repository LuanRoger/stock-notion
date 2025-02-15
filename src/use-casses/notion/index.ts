import {
  getDatabaseRowIds,
  updateDatabasePageProperties,
} from "@/modules/notion/database";
import { Client } from "@notionhq/client";
import { getFiiById } from "../status-invest/fiis";
import { Properties, PropertiesOptions } from "@/models/properties-options";
import { DEFAULT_PAGE_PROPERTIES_NAME } from "@/constants";
import { fiiDataToPageProperty } from "@/models/mappers/properties";
import { lower } from "@/utils/string";

export async function updateDatabaseFiisPageProperties(
  client: Client,
  databaseId: string,
  rowIdColumnName: string
) {
  const fiis = await getDatabaseRowIds(client, databaseId, rowIdColumnName);

  const fiisPromise = fiis.map((fii) => {
    const fiiId = lower(fii);
    return {
      stock: fiiId,
      promise: getFiiById(fiiId),
    };
  });

  const properties: Properties = {};
  for (const fiiPromise of fiisPromise) {
    const { stock, promise } = fiiPromise;
    const fii = await promise;

    properties[stock] = fiiDataToPageProperty(
      fii,
      DEFAULT_PAGE_PROPERTIES_NAME
    );
  }

  console.log(properties);
  const propertiesOptions: PropertiesOptions = {
    rowIdColumnName,
    properties,
  };
  await updateDatabasePageProperties(client, databaseId, propertiesOptions);
}
