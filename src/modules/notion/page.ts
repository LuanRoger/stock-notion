import { PageProperty } from "@/models/properties-options";
import { Client } from "@notionhq/client";

export async function updatePageProperty(
  client: Client,
  id: string,
  property: PageProperty
) {
  await client.pages.update({
    page_id: id,
    properties: {
      [property.name]: {
        number: property.type === "number" ? property.value : null,
        rich_text:
          property.type === "text"
            ? [
                {
                  text: {
                    content: property.value,
                  },
                },
              ]
            : undefined,
      },
    },
  });
}
