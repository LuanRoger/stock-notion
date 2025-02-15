import { NotionPageOrDatabase } from "@/types";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export function isValidPage(
  page: NotionPageOrDatabase,
  rowIdColumnName: string,
  rowId: string
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
  if (cellRowId !== rowId) {
    return false;
  }

  return true;
}
