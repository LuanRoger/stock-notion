import { createFactory } from "hono/factory";
import { getFiiById as getFiiByIdStatusInvest } from "@/use-casses/status-invest/fiis";
import { FiiNotFound } from "@/models/errors";
import { getFiiByIdValidator } from "@/utils/validators";

const controllerFactory = createFactory();

const getFiiById = controllerFactory.createHandlers(
  getFiiByIdValidator,
  async (c) => {
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
  }
);

export { getFiiById };
