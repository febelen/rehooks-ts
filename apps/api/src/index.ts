import { swagger } from "@elysiajs/swagger";
import { Elysia, t } from "elysia";
import { hook } from "./hook";

const app = new Elysia().use(swagger()).use(hook).listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);
