"use client";

import { useEffect, useState } from "react";
import { getPokemonCssSizeAction } from "@actions/getPokemonCssSize.action";

export interface UsePokemonCoverOptions {
  height: number;
}

export const usePokemonCover = ({ height }: UsePokemonCoverOptions) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [size, setSize] = useState<string>("");
  const [elevation, setElevation] = useState<string>("");

  useEffect(() => {
    (async () => {
      const response = await getPokemonCssSizeAction({
        height,
      });

      if (response) {
        const { coverElevation, coverSize } = response;

        setSize(coverSize);
        setElevation(coverElevation);
        setIsLoading(false);
      }
    })();
  }, [height]);

  return {
    size,
    elevation,
    isLoading,
  };
};
