import { useCallback, useState } from "react";

import { Map } from "@/features/map";
import { GpxLayer } from "@/features/map-layers/gpx-layer";
import { ListFiles } from "@/widgests/list-files";

export const RoutesPage = () => {
  const [gpx, setGpx] = useState<string | null>(null);

  const onGpxChange = useCallback((newGpx: string) => {
    setGpx(newGpx);
  }, []);

  return (
    <>
      <Map>{gpx && <GpxLayer gpx={gpx} />}</Map>
      <ListFiles onChange={onGpxChange} />
    </>
  );
};
