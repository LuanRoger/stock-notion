"use server";

import { UpdateNotionFiiDataQueuePayload } from "@/models/notion";
import { ActionState } from "@/models/state";
import { createClient, createSendCommand } from "@/services/queue";
import { notionDatabaseSchema } from "@/utils/schemas/forms/notion";

export async function sendStockMessage(
  _: ActionState,
  formData: FormData
): Promise<ActionState> {
  const result = await notionDatabaseSchema.safeParseAsync({
    databaseId: formData.get("databaseId"),
  });
  if (!result.success) {
    return {
      success: false,
      error: "Informações inválidas",
    };
  }

  const message: UpdateNotionFiiDataQueuePayload = {
    databaseId: result.data.databaseId,
  };
  try {
    const client = createClient();
    const sendCommand = createSendCommand(message);

    await client.send(sendCommand);
  } catch {
    return {
      success: false,
      error: "Um error ocorreu",
    };
  }

  return {
    success: true,
  };
}
