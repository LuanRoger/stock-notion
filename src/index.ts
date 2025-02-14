import { Hono } from "hono";
import parse from "node-html-parser";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("/ffi/:id", async (c) => {
  const ffiId = c.req.param("id");

  const pageContent = await fetch(
    `https://statusinvest.com.br/fundos-imobiliarios/${ffiId}`
  ).then((res) => res.text());

  const parsedContent = parse(pageContent);
  const lastRendimento = parsedContent.querySelector("#dy-info > div:nth-child(2) > div:nth-child(1) > strong:nth-child(2)")
  const text = lastRendimento?.innerText

  return c.text(text ?? "Not found");
});

export default app;
