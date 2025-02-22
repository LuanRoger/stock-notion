import { z } from "zod";
import { stringSchema } from "../commons";

export const notionDatabaseSchema = z.object({
  databaseId: z.string().min(1),
});

export const notionSettingsSchema = z.object({
  actualValue: stringSchema,
  dividendYield: stringSchema,
  lastYieldValue: stringSchema.optional(),
  lastYieldPercentage: stringSchema.optional(),
  lastYieldBasePrice: stringSchema.optional(),
  lastYieldDate: stringSchema.optional(),
  nextYieldValue: stringSchema.optional(),
  nextYieldPercentage: stringSchema.optional(),
  nextYieldBasePrice: stringSchema.optional(),
  nextYieldDate: stringSchema.optional(),
});

export type NotionDatabase = z.infer<typeof notionDatabaseSchema>;
export type NotionSettings = z.infer<typeof notionSettingsSchema>;
