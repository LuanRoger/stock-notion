import { Hono } from "hono";
import type { Env } from "./types";
import { FiisRoutes, FiagroRoutes, NotionRoutes } from "./routes";
import { logger } from "hono/logger";
import { onServerStarts } from "./utils/server";
import { DEFAULT_PORT } from "./constants";
import { parseNumber } from "./utils/numbers";

const app = new Hono<{ Bindings: Env }>();

app.use(logger());

app.route("/fiis", FiisRoutes);
app.route("/fiagro", FiagroRoutes);
app.route("/modules/notion", NotionRoutes);

const port = parseNumber(process.env.PORT) ?? DEFAULT_PORT;
onServerStarts();

export default {
  fetch: app.fetch,
  port,
};
