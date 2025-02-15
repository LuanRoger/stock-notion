import { zValidator } from "@hono/zod-validator";
import { getFiiByIdSchema } from "./schemas";

export const getFiiByIdValidator = zValidator("param", getFiiByIdSchema);
