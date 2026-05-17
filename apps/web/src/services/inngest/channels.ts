import { realtime } from "inngest";
import { notionUpdateStatusSchema } from "./schemas";

export const notionUpdateStatusPipeline = realtime.channel({
  name: "notion-update-status",
  topics: {
    status: {
      schema: notionUpdateStatusSchema,
    },
  },
});
