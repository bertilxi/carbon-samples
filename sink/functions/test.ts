import type { Handler, Middleware } from "carbon/types.ts";

export const middlewares: Middleware[] = [];

export const handler: Handler = (c) => {
  return c.json({ msg: "testing" });
};
