"use server";

import { NOTION_DATA_SOURCE_FI_CHANNEL } from "@/constants";
import { UpdateNotionDataSourceFiMessage } from "@repo/shared/models";
import { ActionState } from "@/models/state";
import { publishToChannel } from "@/services/channel";
import { NotionDataSource } from "@/utils/schemas/forms/notion";
import { headers } from "next/headers";
import { checkLimit } from "@/services/rate-limiter";

export async function sendStockMessage(
  data: NotionDataSource
): Promise<ActionState> {
  const sooManyRequests = await checkLimit(await headers());
  if (sooManyRequests) {
    return {
      success: false,
      error: "Muitas requisições",
    };
  }

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
