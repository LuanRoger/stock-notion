"use server";

import { NOTION_DATABASE_FI_QUEUE } from "@/constants";
import { UpdateNotionDatabaseFiMessage } from "@repo/shared/models";
import { ActionState } from "@/models/state";
import { createPublisher } from "@/services/queue";
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

  const client = createPublisher(NOTION_DATABASE_FI_QUEUE);
  try {
    await client.send(NOTION_DATABASE_FI_QUEUE, message);
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Um error ocorreu",
    };
  } finally {
    await client.close();
  }

  return {
    success: true,
  };
}
