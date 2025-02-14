import { getFiiById } from "@/controllers";
import { Hono } from "hono";

const routes = new Hono();

routes.get("/:id", ...getFiiById);

export default routes;
