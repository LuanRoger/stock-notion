"use server";

import { notionUpdateStatusPipeline } from "@/services/inngest/channels";
import { inngest } from "@/services/inngest/client";
import { getClientSubscriptionToken } from "inngest/react";

export async function triggerNotionDataSourceUpdate(dataSourceId: string) {
  await inngest.send({
    name: "app/data-source.update",
    data: { dataSourceId },
  });
}

export async function getNotionDataSourceUpdateRealtimeToken() {
  return getClientSubscriptionToken(inngest, {
    channel: notionUpdateStatusPipeline,
    topics: ["status"],
  });
}
