import { z } from "zod";
import { stringSchema } from "../commons";

export const notionDatabaseSchema = z.object({
  databaseId: stringSchema,
});

export const notionSettingsSchema = z.object({
  actualValue: z.string().optional(),
  dividendYield: z.string().optional(),
  pvp: z.string().optional(),
  lastYieldValue: z.string().optional(),
  lastYieldPercentage: z.string().optional(),
  lastYieldBasePrice: z.string().optional(),
  lastYieldDate: z.string().optional(),
  nextYieldValue: z.string().optional(),
  nextYieldPercentage: z.string().optional(),
  nextYieldBasePrice: z.string().optional(),
  nextYieldDate: z.string().optional(),
});

export type NotionDatabase = z.infer<typeof notionDatabaseSchema>;
export type NotionSettings = z.infer<typeof notionSettingsSchema>;
