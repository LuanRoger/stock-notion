import { zValidator } from "@hono/zod-validator";
import {
  updateDatabaseFiisPropertiesSchema,
  notionDatabaseIdSchema,
} from "./schemas";

export const notionDatabaseIdValidator = zValidator(
  "param",
  notionDatabaseIdSchema
);

export const updateDatabaseFiisPropertiesValidator = zValidator(
  "json",
  updateDatabaseFiisPropertiesSchema
);
