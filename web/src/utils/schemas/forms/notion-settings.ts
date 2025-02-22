import { z } from "zod";

export const notionSettingsSchema = z.object({
  databaseId: z.string().min(1),
});

export type NotionSettings = z.infer<typeof notionSettingsSchema>;
