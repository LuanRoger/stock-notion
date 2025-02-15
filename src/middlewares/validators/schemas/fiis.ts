import { z } from "zod";
import { fiiSchema } from "./commons";

export const getFiiByIdSchema = z.object({
  id: fiiSchema,
});
