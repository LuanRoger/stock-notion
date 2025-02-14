import { Hono } from "hono";
import { FiisRoutes } from "./routers";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.route("/fii", FiisRoutes);

export default app;
