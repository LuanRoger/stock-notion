import { z } from "zod";

export const getFiiByIdSchema = z.object({
  id: z.string().min(3).endsWith("11"),
});
