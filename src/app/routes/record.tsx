import { createFileRoute } from "@tanstack/react-router";

import { RecordPage } from "@/pages/record";

export const Route = createFileRoute("/record")({
  component: RecordPage,
});
