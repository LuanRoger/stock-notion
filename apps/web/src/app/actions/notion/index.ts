"use server";

import { inngest } from "@/services/inngest/client";

export async function triggerNotionDataSourceUpdate(dataSourceId: string) {
  await inngest.send({
    name: "app/data-source.update",
    data: { dataSourceId },
  });
}
