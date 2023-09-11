import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { person } from "../routes/person";
import { connectDB } from "../config/db";
import dotenv from "dotenv";
dotenv.config();
const app = new Hono();
connectDB(process.env.DATABASE_URL as string);
const port = process.env.PORT || 5000;

app.route("/api", person);

app.get("/", (c) =>
  c.json(
    {
      message: "Hello world",
    },
    200
  )
);

serve({
  fetch: app.fetch,
  port: port as number,
});
