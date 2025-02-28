import { getFiById as getFiiByIdStatusInvest } from "@/use-casses/status-invest/fiis";
import { FiNotFound } from "@/models/errors";
import { getFiByIdValidator } from "@/middlewares/validators";
import { Hono } from "hono";
import type { Env } from "@/types";

const routes = new Hono<{ Bindings: Env }>();

routes.get("/:id", getFiByIdValidator, async (c) => {
  const { id: fiiId } = c.req.valid("param");

  try {
    const fii = await getFiiByIdStatusInvest(fiiId);

    return c.json(fii);
  } catch (e) {
    if (e instanceof FiNotFound) {
      return c.notFound();
    }
  }
});

export default routes;
