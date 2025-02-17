import { createFileRoute } from "@tanstack/react-router";

import { RoutesPage } from "@/pages/routes";

export const Route = createFileRoute("/")({
  component: RoutesPage,
});
