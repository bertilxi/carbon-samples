import type { Handler } from "carbon/types.ts";

export const handler: Handler = (c) => {
  return c.redirect(c.req.path.replace("/e/", "/event/"));
};
