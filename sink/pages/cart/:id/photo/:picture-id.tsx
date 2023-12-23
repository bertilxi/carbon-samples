import type { PageProperties } from "carbon/types.ts";

export default function UserIdPage({ c }: PageProperties) {
  return (
    <div>
      cart {c.req.param("id")} photo {c.req.param("picture-id")}
    </div>
  );
}
