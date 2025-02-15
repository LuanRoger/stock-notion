import { Hono } from "hono";
import { FiisRoutes, NotionRoutes } from "./routes";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.route("/fiis", FiisRoutes);
app.route("/modules/notion", NotionRoutes);

export default app;
