import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

import { ThemeProvider as MuiThemeProvider } from "@mui/material";

import { useMuiTheme } from "@/shared/ui-kit/theme/mui-theme.tsx";

import PWABadge from "./PWABadge.tsx";
import { GlobalStyle } from "./global-style.tsx";
import { Router } from "./router.tsx";

function App() {
  const muiTheme = useMuiTheme();

  return (
    <>
      <MuiThemeProvider theme={muiTheme}>
        <EmotionThemeProvider theme={muiTheme}>
          <Router />
          <GlobalStyle />
          <PWABadge />
        </EmotionThemeProvider>
      </MuiThemeProvider>
    </>
  );
}

export default App;
