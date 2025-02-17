import { FC, memo } from "react";

import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string | null;
  label: string;
};

export const MenuItemTextField: FC<Props> = memo(
  ({ onChange, value, label }) => {
    return (
      <MenuItem>
        <TextField
          sx={{
            width: "100%",
            label: { color: "#ffffff" },
            input: { color: "#ffffff" },
          }}
          id="outlined-basic"
          label={label}
          variant="outlined"
          color="primary"
          onChange={onChange}
          value={value}
        />
      </MenuItem>
    );
  }
);
