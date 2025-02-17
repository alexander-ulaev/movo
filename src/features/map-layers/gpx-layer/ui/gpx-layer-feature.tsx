import { FC, memo, useEffect, useMemo } from "react";

import { PathLayer } from "deck.gl";
import GpxParser from "gpxparser";

import { useMapContext } from "@/features/map/context";

type Props = {
  gpx: string;
};

// type BartLine = {
//   name: string;
//   color: string;
//   path: [longitude: number, latitude: number][];
// };
type BartLine = [longitude: number, latitude: number][];

export const GpxLayer: FC<Props> = memo(({ gpx }) => {
  const { setLayers } = useMapContext();

  const pathLayer = useMemo(() => {
    const gpxParser = new GpxParser();

    gpxParser.parse(gpx);

    const trackPoints = gpxParser.tracks[0].points.map((point) => [
      point.lon,
      point.lat,
    ]);

    return new PathLayer<BartLine>({
      id: "PathLayer",
      data: [trackPoints],

      getColor: () => {
        return [0, 0, 255, 200];
      },
      getPath: (d) => d,
      getWidth: 100,
      pickable: true,
    });
  }, [gpx]);

  useEffect(() => {
    setLayers((prev) => [...prev, pathLayer]);

    return () => {
      setLayers((prev) => prev.filter((layer) => layer !== pathLayer));
    };
  }, [pathLayer]);

  return <></>;
});
