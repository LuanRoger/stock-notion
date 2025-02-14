import { Hono } from "hono";
import { FiisRoutes, NotionRoutes } from "./routes";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.route("/fii", FiisRoutes);
app.route("/modules/notion", NotionRoutes);

export default app;
