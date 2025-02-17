import { createContext, useContext } from "react";

import { LayersList } from "deck.gl";

//TODO: add/remove layers
export interface IContext {
  layers: LayersList;
  setLayers: React.Dispatch<React.SetStateAction<LayersList>>;
}

export const Context = createContext<IContext>({
  layers: [],
  setLayers: () => undefined,
});

export function useMapContext() {
  return useContext(Context);
}
