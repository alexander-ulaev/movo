import { FC, memo } from "react";

import SaveIcon from '@mui/icons-material/Save';
import { ListItemIcon, ListItemText } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

type Props = { onClick: () => void };

export const MenuItemSave: FC<Props> = memo(({ onClick }) => {
  return (
    <MenuItem onClick={onClick}>
      <ListItemIcon>
        <SaveIcon color="primary" fontSize="small" />
      </ListItemIcon>
      <ListItemText>Сохранить</ListItemText>
    </MenuItem>
  );
});
