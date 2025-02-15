import { z } from "zod";
import { numberSchema, stringSchema } from "./commons";

export const textOrNumberSchema = z.union([
  z.object({
    name: stringSchema,
    type: z.literal("text"),
    value: z.string().min(1),
  }),
  z.object({
    name: stringSchema,
    type: z.literal("number"),
    value: numberSchema,
  }),
  z.object({
    name: stringSchema,
    type: z.literal("date"),
    value: z.string().min(1),
  }),
]);

export const updateDatabaseFiisPropertiesSchema = z.object({
  rowIdColumnName: stringSchema,
  databaseColumns: z.object({
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
  }).optional(),
});

export const notionDatabaseIdSchema = z.object({
  databaseId: stringSchema,
});
