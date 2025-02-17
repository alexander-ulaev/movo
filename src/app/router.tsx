import { RouterProvider, createRouter } from "@tanstack/react-router";
import { useMemo } from "react";

import { routeTree } from "./router-tree.gen";

const router = createRouter({ routeTree, context: {} });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const Router = () => {
  const routerContext = useMemo(() => ({}), []);

  return (
    <RouterProvider router={router} context={routerContext}></RouterProvider>
  );
};
