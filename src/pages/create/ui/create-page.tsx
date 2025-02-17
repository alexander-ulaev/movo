import { useCallback, useState } from "react";

import { MenuList } from "@mui/material";

import {
  MenuItemCancel,
  MenuItemSave,
  MenuItemTextField,
} from "@/entities/menu-items";
import { Map } from "@/features/map";
import { GpxLayer } from "@/features/map-layers/gpx-layer";
import { MenuItemUploadGpx } from "@/features/menu-item-upload-gpx";
import { saveFileToOPFS } from "@/shared/utils";

export const Create = () => {
  const [gpx, setGpx] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const onChangeGpx = useCallback((gpx: string, fileName: string) => {
    setGpx(gpx);
    setFileName(fileName);
  }, []);

  const onCancel = useCallback(() => {
    setGpx(null);
  }, []);

  const onSave = useCallback(() => {
    if (gpx && fileName) {
      saveFileToOPFS(fileName, gpx);
    }
  }, [gpx]);

  const onNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFileName(event.target.value);
    },
    []
  );

  return (
    <>
      <Map>{gpx && <GpxLayer gpx={gpx} />}</Map>
      {/* TODO: какой-то косяк в верстке на телефоне... */}
      <MenuList sx={{ marginBottom: "112px" }}>
        {!gpx && <MenuItemUploadGpx onChangeGpx={onChangeGpx} />}
        {gpx && (
          <MenuItemTextField
            value={fileName}
            onChange={onNameChange}
            label="имя"
          />
        )}
        {gpx && <MenuItemSave onClick={onSave} />}
        {gpx && <MenuItemCancel onClick={onCancel} />}
      </MenuList>
    </>
  );
};
