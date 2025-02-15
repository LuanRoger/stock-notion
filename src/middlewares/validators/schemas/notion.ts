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

export const updateDatabasePagePropertiesSchema = z.object({
  rowIdColumnName: z.string(),
  rowId: z.string(),
  properties: z.union([textOrNumberSchema, z.array(textOrNumberSchema)]),
});
