import FiisRoutes from "./routes/fiis";
import FiagroRoutes from "./routes/fiagro";
import NotionRoutes from "./routes/notion";
import { onServerStarts } from "./utils/server";
import { DEFAULT_PORT } from "./constants";
import { parseNumber } from "./utils/numbers";
import Elysia from "elysia";

const app = new Elysia()

app.use(FiisRoutes)
app.use(FiagroRoutes)
app.use(NotionRoutes)

onServerStarts();

const port = parseNumber(process.env.PORT) ?? DEFAULT_PORT;
app.listen(port)

console.log(`Server is running at ${app.server?.hostname}:${app.server?.port}`)
