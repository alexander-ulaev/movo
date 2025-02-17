import { FC, memo } from "react";

import CancelIcon from "@mui/icons-material/Cancel";
import { ListItemIcon, ListItemText } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

type Props = { onClick: () => void };

export const MenuItemCancel: FC<Props> = memo(({ onClick }) => {
  return (
    <MenuItem onClick={onClick}>
      <ListItemIcon>
        <CancelIcon color="primary" fontSize="small" />
      </ListItemIcon>
      <ListItemText>Отмена</ListItemText>
    </MenuItem>
  );
});
