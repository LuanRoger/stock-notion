import { getFiiById as getFiiByIdStatusInvest } from "@/use-casses/status-invest/fiis";
import { FiiNotFound } from "@/models/errors";
import { getFiiByIdValidator } from "@/middlewares/validators";
import { Hono } from "hono";
import type { Env } from "@/types";

const routes = new Hono<{ Bindings: Env }>();

routes.get("/:id", getFiiByIdValidator, async (c) => {
  const { id: fiiId } = c.req.valid("param");

  try {
    const fii = await getFiiByIdStatusInvest(fiiId);

    return c.json(fii);
  } catch (e) {
    if (e instanceof FiiNotFound) {
      return c.notFound();
    }
  }
});

export default routes;
