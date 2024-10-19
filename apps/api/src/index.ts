import { swagger } from "@elysiajs/swagger";
import { cors } from "@elysiajs/cors";
import { Elysia, t } from "elysia";
import { hook } from "./hook";

const app = new Elysia()
  // enable cors
  .use(cors())
  // swagger
  .use(swagger())
  // /hooks
  .use(hook)
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);
