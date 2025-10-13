"use server";

import { NOTION_DATA_SOURCE_FI_CHANNEL } from "@/constants";
import { UpdateNotionDataSourceFiMessage } from "@repo/shared/models";
import { ActionState } from "@/models/state";
import { publishToChannel } from "@/services/redis";
import { NotionDataSource } from "@/utils/schemas/forms/notion";

export async function sendStockMessage(
  data: NotionDataSource
): Promise<ActionState> {
  const { dataSourceId } = data;
  const message: UpdateNotionDataSourceFiMessage = {
    dataSourceId,
  };

  try {
    await publishToChannel(NOTION_DATA_SOURCE_FI_CHANNEL, message);
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Um error ocorreu",
    };
  }

  return {
    success: true,
  };
}
