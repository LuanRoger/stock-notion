"use server";

import { NOTION_DATABASE_FI_QUEUE } from "@/constants";
import { UpdateNotionFiDataQueuePayload } from "@/models/notion";
import { ActionState } from "@/models/state";
import { createPublisher } from "@/services/queue";
import { NotionDatabase } from "@/utils/schemas/forms/notion";

export async function sendStockMessage(
  data: NotionDatabase
): Promise<ActionState> {
  const { databaseId } = data;
  const message: UpdateNotionFiDataQueuePayload = {
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
