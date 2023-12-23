import type { PageProperties } from "carbon/types.ts";

export default function UserIdPage({ c }: PageProperties) {
  return <div>user id {c.req.param("id")}</div>;
}
