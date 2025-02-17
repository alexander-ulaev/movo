import { FC, memo, useCallback, useEffect, useState } from "react";

import styled from "@emotion/styled";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import { ListItemText, MenuItem, MenuList } from "@mui/material";
import { IconButton } from "@mui/material";

import {
  deleteFileFromOPFS,
  listFilesInOPFS,
  readFileFromOPFS,
  shareFileFromOPFS,
} from "@/shared/utils";

const Root = styled.div`
  width: 100%;
  overflow-y: auto;
  max-height: 500px;
  min-height: 70px;

  margin-bottom: 112px;
`;

type Props = {
  onChange: (gpx: string) => void;
};

export const ListFiles: FC<Props> = memo(({ onChange }) => {
  const [listFiles, setListFiles] = useState<string[]>([]);

  const refreshList = useCallback(() => {
    listFilesInOPFS().then((result) => {
      setListFiles(result);
      console.log("result", result);
    });
  }, []);

  useEffect(() => {
    refreshList();
  }, [refreshList]);

  const onFileClick = useCallback((fileName: string) => {
    readFileFromOPFS(fileName).then((result) => {
      onChange(result as string);
    });
  }, []);

  const onClickShare = useCallback((fileName: string) => {
    shareFileFromOPFS(fileName);
  }, []);

  const onClickDelete = useCallback(
    (fileName: string) => {
      deleteFileFromOPFS(fileName);
      refreshList();
    },
    [refreshList]
  );

  return (
    <Root>
      {listFiles.length === 0 && <>Нет файлов</>}
      <MenuList>
        {listFiles.map((fileName) => (
          <MenuItem key={`list-files-${fileName}`} onClick={() => onFileClick(fileName)}>
            <ListItemText>{fileName}</ListItemText>
            <IconButton onClick={() => onClickShare(fileName)}>
              <ShareIcon color="primary" fontSize="medium" />
            </IconButton>
            <IconButton onClick={() => onClickDelete(fileName)}>
              <DeleteIcon color="primary" fontSize="medium" />
            </IconButton>
          </MenuItem>
        ))}
      </MenuList>
    </Root>
  );
});
