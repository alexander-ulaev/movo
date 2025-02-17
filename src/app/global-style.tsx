import { Global, css } from "@emotion/react";

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html,
        body,
        div#root {
          height: 100vh;
          width: 100vw;
          display: flex;
          align-items: stretch;
          overflow: hidden;
        }
        * {
          margin: 0;
          padding: 0;

          box-sizing: border-box;
        }
      `}
    />
  );
};
