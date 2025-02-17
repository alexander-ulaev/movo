import { useNavigate, useRouterState } from "@tanstack/react-router";

import CreateIcon from "@mui/icons-material/Create";
import RouteIcon from "@mui/icons-material/Route";
import { BottomNavigationAction } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";

export const Menu = () => {
  const navigate = useNavigate();
  const router = useRouterState();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    navigate({ to: newValue });
  };

  return (
    <BottomNavigation
      sx={{ width: "100%", position:"absolute", bottom:0 }}
      value={router.location.pathname}
      onChange={handleChange}
    >
      <BottomNavigationAction label="Маршруты" value="/" icon={<RouteIcon />} />
      {/* <BottomNavigationAction
        label="Запись"
        value="/record"
        icon={<FiberManualRecordIcon />}
      /> */}
      <BottomNavigationAction
        label="Создать"
        value="/create"
        icon={<CreateIcon />}
      />
    </BottomNavigation>
  );
};
