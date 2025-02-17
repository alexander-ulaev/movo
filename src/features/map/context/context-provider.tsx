import { ContextType, PropsWithChildren, memo, useMemo, useState } from "react";

import { LayersList } from "deck.gl";

import { Context } from "./context";

export const MapContextProvider = memo(({ children }: PropsWithChildren) => {
  const [layers, setLayers] = useState<LayersList>([]);

  const ctx = useMemo<ContextType<typeof Context>>(
    () => ({ layers, setLayers }),
    [layers]
  );

  return <Context.Provider value={ctx}>{children}</Context.Provider>;
});
