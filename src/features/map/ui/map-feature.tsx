import DeckGL from "@deck.gl/react";
import { FC, PropsWithChildren, memo, useEffect } from "react";

import { TileLayer } from "@deck.gl/geo-layers";
import styled from "@emotion/styled";
import { BitmapLayer, PickingInfo } from "deck.gl";
import { MjolnirGestureEvent } from "mjolnir.js";

import { MapContextProvider, useMapContext } from "../context";

const apiKey = import.meta.env.VITE_THUNDERFOREST_API_KEY;

const Root = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

//todo: gps
const INITIAL_VIEW_STATE = {
  latitude: 53.49098,
  longitude: 49.415481,
  zoom: 10,
  pitch: 0,
  bearing: 0,
};

const tileLayer = new TileLayer({
  id: "main-tile-layer",
  // data: 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
  data: `https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=${apiKey}`,
  maxZoom: 19,
  minZoom: 0,

  renderSubLayers: (props) => {
    const { boundingBox } = props.tile;

    return new BitmapLayer(props, {
      data: undefined,
      image: props.data,
      bounds: [
        boundingBox[0][0],
        boundingBox[0][1],
        boundingBox[1][0],
        boundingBox[1][1],
      ],
    });
  },
  pickable: true,
});

type Props = {
  onClick?: (info: PickingInfo, event: MjolnirGestureEvent) => void;
} & PropsWithChildren;

const MapComponent: FC<Props> = memo(({ onClick, children }) => {
  const { layers, setLayers } = useMapContext();

  useEffect(() => {
    setLayers((prev) => [...prev, tileLayer]);

    return () => {
      setLayers((prev) => prev.filter((layer) => layer !== tileLayer));
    };
  }, []);

  console.log("layers", layers);

  return (
    <Root>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
        style={{ width: "100%", height: "100%" }}
        onClick={onClick}
      />
      {children}
    </Root>
  );
});

export const Map: FC<Props> = memo((props) => {
  return (
    <MapContextProvider>
      <MapComponent {...props} />
    </MapContextProvider>
  );
});
