import { PageProperty } from "@/models/properties-options";
import { reduceProperties } from "@/utils/notion";
import { Client } from "@notionhq/client";

export async function updatePageProperty(
  client: Client,
  id: string,
  properties: PageProperty[]
) {
  const notionProperties = reduceProperties(properties);

  await client.pages.update({
    page_id: id,
    properties: notionProperties,
  });
}
