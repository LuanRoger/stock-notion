import { zValidator } from "@hono/zod-validator";
import {
  updateDataSourceFiisPropertiesSchema,
  notionDataSourceIdSchema,
} from "./schemas";
import {
  updateDataSourceFiisPropertiesHeadersSchema,
  updateDataSourceFiTicketSchema,
} from "./schemas/notion";

export const notionDataSourceIdValidator = zValidator(
  "param",
  notionDataSourceIdSchema
);

export const notionDataSourceIdTicketValidator = zValidator(
  "param",
  updateDataSourceFiTicketSchema
);

export const updateDataSourceFiisPropertiesValidator = zValidator(
  "json",
  updateDataSourceFiisPropertiesSchema
);

export const updateDataSourceFiisPropertiesHeadersValidator = zValidator(
  "header",
  updateDataSourceFiisPropertiesHeadersSchema
);
