import { zValidator } from "@hono/zod-validator";
import { updateDatabasePagePropertiesSchema } from "./schemas";
import { notionDatabaseIdSchema } from "./schemas/notion";

export const notionDatabaseIdValidator = zValidator(
  "param",
  notionDatabaseIdSchema
);

export const updateDatabaseFiisPropertiesValidator = zValidator(
  "json",
  updateDatabasePagePropertiesSchema
);
