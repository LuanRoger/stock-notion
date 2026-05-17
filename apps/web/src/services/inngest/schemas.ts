import { DEFAULT_NOTION_COLUMN_ID_NAME } from "@/constants/notion";
import { timeZoneValues } from "@/types/time";
import { stringSchema } from "@/utils/schemas/commons";
import z from "zod";

export const updateDataSourceFiisPropertiesSchema = z.object({
  dataSourceId: stringSchema,
  rowIdColumnName: stringSchema.default(DEFAULT_NOTION_COLUMN_ID_NAME),
  headers: z
    .object({
      timeZone: z.enum(timeZoneValues).optional(),
    })
    .optional(),
  dataSourceColumns: z
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
