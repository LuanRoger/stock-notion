import { zValidator } from "@hono/zod-validator";
import { getFiiByIdSchema } from "./schemas";

export const getFiByIdValidator = zValidator("param", getFiiByIdSchema);
