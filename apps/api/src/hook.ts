import { Elysia, t } from "elysia";
import { readFileSync } from "fs";

type HookData = Readonly<{
  id: number;
  title: string;
  description: string;
}>;

class Hook {
  public idCounter: number = 0;
  public data: HookData[] = [];

  constructor() {
    this.loadData();
  }

  private loadData() {
    try {
      const jsonData = readFileSync("hooks.json", "utf-8");
      this.data = JSON.parse(jsonData);
      this.idCounter =
        this.data.length > 0
          ? Math.max(...this.data.map((hook) => hook.id)) + 1
          : 0;
    } catch (error) {
      console.error("Error loading data:", error);
      this.data = [];
    }
  }

  getLimited(count: number) {
    return this.data.slice(0, count);
  }

  searchByName(name: string) {
    return this.data.filter((hook) =>
      hook.title.toLowerCase().includes(name.toLowerCase()),
    );
  }
}

export const hook = new Elysia()
  .decorate("hook", new Hook())
  .group("/hooks", (app) =>
    app
      .get(
        "/",
        ({ hook, query: { limit, search } }) => {
          if (search !== undefined) {
            return hook.searchByName(search);
          }
          if (limit !== undefined) {
            const parsedLimit = Number(limit);
            if (isNaN(parsedLimit) || parsedLimit <= 0) {
              return { error: "Invalid limit. It must be a positive number." };
            }
            return hook.getLimited(parsedLimit);
          }
          return hook.data;
        },
        {
          query: t.Object({
            limit: t.Optional(t.String()),
            search: t.Optional(t.String()),
          }),
        },
      )
      .get(
        "/:index",
        ({ hook, params: { index }, error }) => {
          return hook.data[index] ?? error(404, "Not Found :(");
        },
        {
          params: t.Object({
            index: t.Number(),
          }),
        },
      ),
  );
