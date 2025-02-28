"use server";

import { NOTION_DATABASE_FI_QUEUE } from "@/constants";
import { UpdateNotionFiDataQueuePayload } from "@/models/notion";
import { ActionState } from "@/models/state";
import { createPublisher } from "@/services/queue";
import { notionDatabaseSchema } from "@/utils/schemas/forms/notion";

export async function sendStockMessage(
  _: ActionState,
  formData: FormData
): Promise<ActionState> {
  const parseResult = await notionDatabaseSchema.safeParseAsync({
    databaseId: formData.get("databaseId"),
  });
  if (!parseResult.success) {
    return {
      success: false,
      error: "Informações inválidas",
    };
  }

  const message: UpdateNotionFiDataQueuePayload = {
    databaseId: parseResult.data.databaseId,
  };

  const client = createPublisher(NOTION_DATABASE_FI_QUEUE);
  try {
    await client.send({ exchange: NOTION_DATABASE_FI_QUEUE }, message);
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
