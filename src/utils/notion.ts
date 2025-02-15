import { PageProperty } from "@/models/properties-options";
import { NotionPageOrDatabase } from "@/types";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export function isValidPage(
  page: NotionPageOrDatabase,
  rowIdColumnName: string,
  rowId: string | string[]
): page is PageObjectResponse {
  if (page.object !== "page") {
    return false;
  }

  const properPage = page as PageObjectResponse;
  const rowIdProperty = properPage.properties[rowIdColumnName];
  if (rowIdProperty.type !== "title") {
    return false;
  }

  const cellRowId = rowIdProperty.title[0].plain_text;
  const isArray = Array.isArray(rowId);
  const includes = isArray ? rowId.includes(cellRowId) : cellRowId === rowId;
  if (!includes) {
    return false;
  }

  return true;
}

export function reduceProperties(properties: PageProperty[]) {
  return properties.reduce((acc, { name, type, value }) => {
    switch (type) {
      case "text":
        acc[name] = {
          type: "title",
          title: [
            {
              type: "text",
              text: { content: value },
            },
          ],
        };
        break;
      case "number":
        acc[name] = {
          type: "number",
          number: value,
        };
        break;
    }
    return acc;
  }, {} as Record<string, any>);
}
