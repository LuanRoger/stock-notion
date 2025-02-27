import { Hono } from "hono";
import { serve } from "@hono/node-server";
import type { Env } from "./types";
import { FiisRoutes, FiagroRoutes, NotionRoutes } from "./routes";
import { logger } from "hono/logger";

const app = new Hono<{ Bindings: Env }>();

app.use(logger())

app.route("/fiis", FiisRoutes);
app.route("/fiagro", FiagroRoutes);
app.route("/modules/notion", NotionRoutes);

serve(app, (info) => {
  const { port } = info;
  console.log(`Server running on port ${port}`);
});
