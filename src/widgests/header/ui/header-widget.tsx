import AdbIcon from "@mui/icons-material/Adb";
import { AppBar, Box, Typography } from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="static">
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          MOVO
        </Typography>
      </Box>
    </AppBar>
  );
};
