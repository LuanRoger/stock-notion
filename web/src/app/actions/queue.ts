"use server";

import { UpdateNotionFiiDataQueuePayload } from "@/models/notion";
import { ActionState } from "@/models/state";
import { createClient } from "@/services/queue";
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

  const message: UpdateNotionFiiDataQueuePayload = {
    databaseId: parseResult.data.databaseId,
  };

  try {
    const client = createClient();
    await client.publishJSON({
      url: process.env.QSTASH_URL!,
      body: message,
    });
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
