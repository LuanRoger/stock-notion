import { getFiiById as getFiiByIdStatusInvest } from "@/use-casses/status-invest/fiis";
import { FiiNotFound } from "@/models/errors";
import { getFiiByIdValidator } from "@/middlewares/validators";
import { Hono } from "hono";

const routes = new Hono<{ Bindings: CloudflareBindings }>();

routes.get("/:id", getFiiByIdValidator, async (c) => {
  const fiiId = c.req.param("id");
  if (!fiiId) {
    return c.status(400);
  }

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
