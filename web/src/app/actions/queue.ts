"use server";

import { createClient, createSendCommand } from "@/services/queue";

export async function sendStockMessage(message: string): Promise<void | null> {
  const client = createClient();
  const sendCommand = createSendCommand(message);

  try {
    await client.send(sendCommand);
  } catch (error) {
    console.error(error);
  }
}
