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
]);

export const pagePropertyOptionsSchema = z.object({
  rowId: stringSchema,
  properties: z.array(textOrNumberSchema),
});

export const updateDatabasePagePropertiesSchema = z.object({
  rowIdColumnName: stringSchema,
  properties: z.array(pagePropertyOptionsSchema),
});
