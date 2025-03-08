"use server";

import { NOTION_DATABASE_FI_CHANNEL } from "@/constants";
import { UpdateNotionDatabaseFiMessage } from "@repo/shared/models";
import { ActionState } from "@/models/state";
import { publishToChannel } from "@/services/channel";
import { NotionDatabase } from "@/utils/schemas/forms/notion";
import { headers } from "next/headers";
import { checkLimit } from "@/services/rate-limiter";

export async function sendStockMessage(
  data: NotionDatabase
): Promise<ActionState> {
  const sooManyRequests = await checkLimit(await headers());
  if (sooManyRequests) {
    return {
      success: false,
      error: "Muitas requisições",
    };
  }

  const { databaseId } = data;
  const message: UpdateNotionDatabaseFiMessage = {
    databaseId: databaseId,
  };

  try {
    await publishToChannel(NOTION_DATABASE_FI_CHANNEL, message);
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
