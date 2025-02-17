import { FC, memo, useCallback, useRef } from "react";

import styled from "@emotion/styled";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";

const HiddenInput = styled.input`
  display: none;
`;
type Props = {
  onChangeGpx: (gpx: string, fileName: string) => void;
};

export const MenuItemUploadGpx: FC<Props> = memo(({ onChangeGpx }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    if (target.files) {
      const file = target.files[0];
      const reader = new FileReader();
      reader.readAsText(file);

      reader.onloadend = () => {
        onChangeGpx(reader.result as string, file.name);
      };
    }
  }, []);

  return (
    <MenuItem
      onClick={() => {
        inputRef.current?.click();
      }}
    >
      <ListItemIcon>
        <FileUploadIcon color="primary" fontSize="small" />
      </ListItemIcon>
      <ListItemText>Загрузить</ListItemText>
      <HiddenInput
        ref={inputRef}
        type="file"
        accept=".gpx"
        onChange={onUpload}
      />
    </MenuItem>
  );
});
