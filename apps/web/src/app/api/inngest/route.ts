import { serve } from "inngest/next";
import { inngest } from "@/services/inngest/client";
import { updateNotionDataSourceFiisPageProperties } from "@/services/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [updateNotionDataSourceFiisPageProperties],
});
