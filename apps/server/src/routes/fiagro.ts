import { getFiByIdValidator } from "@/middlewares/validators/fiis";
import { FiNotFound } from "@/models/errors";
import type { Env } from "@/types";
import { getFiagroById } from "@/use-casses/status-invest/fiagro";
import { Hono } from "hono";

const routes = new Hono<{ Bindings: Env }>();

routes.get("/:id", getFiByIdValidator, async (c) => {
  const { id: fiiId } = c.req.valid("param");

  try {
    const fii = await getFiagroById(fiiId);

    return c.json(fii);
  } catch (e) {
    if (e instanceof FiNotFound) {
      return c.notFound();
    }
  }
});

export default routes;
