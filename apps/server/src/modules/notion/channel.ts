import {
  DEFAULT_NOTION_COLUMN_ID_NAME,
  NOTION_DATA_SOURCE_FI_CHANNEL,
} from "@/constants";
import type { UpdateNotionDataSourceFiMessage } from "@repo/shared/models";
import { subscribeToChannel } from "@/services/channel";
import { createNotionClient } from ".";
import { updateDataSourceFiisPageProperties } from "@/use-casses/notion";
import type { NotionReducePropertiesOptions } from "@repo/shared/models";

export function subscribeNotionDataSourceFi() {
  subscribeToChannel<UpdateNotionDataSourceFiMessage>(
    NOTION_DATA_SOURCE_FI_CHANNEL,
    updateNotionDataSourceFi
  );
}

async function updateNotionDataSourceFi(
  message: UpdateNotionDataSourceFiMessage
) {
  const notionSecret = process.env.NOTION_INTEGRATION_SECRET;
  if (!notionSecret) {
    return;
  }

  const notionClient = createNotionClient(notionSecret);
  const { dataSourceId, rowIdColumnName, timeZone, ...dataSourceColumns } =
    message;
  const dataSourcePropertiesName =
    Object.keys(dataSourceColumns).length !== 0 ? dataSourceColumns : undefined;
  const reduceOptions: NotionReducePropertiesOptions = { timeZone };

  await updateDataSourceFiisPageProperties(
    notionClient,
    dataSourceId,
    rowIdColumnName ?? DEFAULT_NOTION_COLUMN_ID_NAME,
    dataSourcePropertiesName,
    reduceOptions
  );
}
