import { z } from "zod";
import { fiSchema, numberSchema, stringSchema } from "./commons";
import { timeZoneValues } from "@repo/shared/types";

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
  rowIdColumnName: stringSchema.optional(),
  databaseColumns: z
    .object({
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
    })
    .optional(),
});

export const notionDatabaseIdSchema = z.object({
  databaseId: stringSchema,
});

export const fiTicketSchema = z.object({
  ticket: fiSchema,
});

export const updateDatabaseFiTicketSchema = z.object({
  ...fiTicketSchema.shape,
  ...notionDatabaseIdSchema.shape,
})

export const updateDatabaseFiisPropertiesHeadersSchema = z.object({
  TimeZone: z.enum(timeZoneValues).optional(),
});
