import { z } from "zod";
import { fiSchema } from "./commons";

export const getFiByIdSchema = z.object({
  id: fiSchema,
});
