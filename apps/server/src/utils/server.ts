import { APP_MESSAGES } from "@/constants";
import { notionDatabaseFiQueueConsumer } from "@/modules/notion/queue";
import { redisClient } from "@/services/cache";
import { rabbitMqConnection } from "@/services/queue";
import type { AddressInfo } from "node:net";

export function onServerStarts(info: AddressInfo) {
  const { port } = info;
  console.log(`Server started on port ${port}`);
}

export async function onServerCloses() {
  console.log(APP_MESSAGES.CLOSSING_RABBIT_MQ_CONNECTION);
  await notionDatabaseFiQueueConsumer.close();
  await rabbitMqConnection.close();
  await redisClient.quit();

  console.log(APP_MESSAGES.CLOSSING_SERVER);
}
