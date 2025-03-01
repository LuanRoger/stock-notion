import { NOTION_DATABASE_FI_QUEUE } from "@/constants";
import { createConsumer } from "@/services/queue";

export function createNotionDatabaseFiQueueConsumer() {
  return createConsumer(NOTION_DATABASE_FI_QUEUE, async (message) => {
    console.log(message);
  });
}

export const notionDatabaseFiQueueConsumer =
  createNotionDatabaseFiQueueConsumer();
