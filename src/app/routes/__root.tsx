import { Outlet, createRootRoute } from "@tanstack/react-router";

import styled from "@emotion/styled";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { Header } from "@/widgests/header";
import { Menu } from "@/widgests/menu";

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
`;

export const Route = createRootRoute({
  component: () => (
    <>
      <Root>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Menu />
      </Root>
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
