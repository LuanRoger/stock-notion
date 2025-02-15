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
});
