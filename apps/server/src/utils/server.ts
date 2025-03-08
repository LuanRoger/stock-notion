import { APP_MESSAGES } from "@/constants";
import { subscribeNotionDatabaseFi } from "@/modules/notion/channel";
import { redisClient } from "@/services/redis";
import type { AddressInfo } from "node:net";

export function onServerStarts(info: AddressInfo) {
  const { port } = info;

  subscribeNotionDatabaseFi();

  console.log(`Server started on port ${port}`);
}

export async function onServerCloses() {
  console.log(APP_MESSAGES.CLOSSING_RABBIT_MQ_CONNECTION);

  await redisClient.quit();

  console.log(APP_MESSAGES.CLOSSING_SERVER);
}
