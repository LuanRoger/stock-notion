import { zValidator } from "@hono/zod-validator";
import {
  updateDatabaseFiisPropertiesSchema,
  notionDatabaseIdSchema,
} from "./schemas";
import { updateDatabaseFiisPropertiesHeadersSchema } from "./schemas/notion";

export const notionDatabaseIdValidator = zValidator(
  "param",
  notionDatabaseIdSchema
);

export const updateDatabaseFiisPropertiesValidator = zValidator(
  "json",
  updateDatabaseFiisPropertiesSchema
);

export const updateDatabaseFiisPropertiesHeadersValidator = zValidator(
  "header",
  updateDatabaseFiisPropertiesHeadersSchema
);
