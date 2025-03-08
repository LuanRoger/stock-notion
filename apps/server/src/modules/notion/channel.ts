import {
  DEFAULT_NOTION_COLUMN_ID_NAME,
  NOTION_DATABASE_FI_CHANNEL,
} from "@/constants";
import type { UpdateNotionDatabaseFiMessage } from "@repo/shared/models";
import { subscribeToChannel } from "@/services/channel";
import { createNotionClient } from ".";
import { updateDatabaseFiisPageProperties } from "@/use-casses/notion";
import type { NotionReducePropertiesOptions } from "@repo/shared/models";

export function subscribeNotionDatabaseFi() {
  subscribeToChannel<UpdateNotionDatabaseFiMessage>(
    NOTION_DATABASE_FI_CHANNEL,
    updateNotionDatabaseFi
  );
}

async function updateNotionDatabaseFi(message: UpdateNotionDatabaseFiMessage) {
  const notionSecret = process.env.NOTION_INTEGRATION_SECRET;
  if (!notionSecret) {
    return;
  }

  const notionClient = createNotionClient(notionSecret);
  const { databaseId, rowIdColumnName, timeZone, ...databaseColumns } = message;
  const databasePropertiesName =
    Object.keys(databaseColumns).length !== 0 ? databaseColumns : undefined;
  const reduceOptions: NotionReducePropertiesOptions = { timeZone };

  await updateDatabaseFiisPageProperties(
    notionClient,
    databaseId,
    rowIdColumnName ?? DEFAULT_NOTION_COLUMN_ID_NAME,
    databasePropertiesName,
    reduceOptions
  );
}
