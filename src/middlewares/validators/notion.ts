import { zValidator } from "@hono/zod-validator";
import { updateDatabasePagePropertiesSchema } from "./schemas";

export const updateDatabaseFiisPropertiesValidator = zValidator(
  "json",
  updateDatabasePagePropertiesSchema
);
