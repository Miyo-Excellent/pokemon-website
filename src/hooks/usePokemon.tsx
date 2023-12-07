"use client";
import { PokemonModel } from "@models/pokemon.model";
import { getBackgroundByTypes } from "@utils/getBackgroundByTypes";
import { useEffect, useState } from "react";
import { getPokemonAction } from "@/actions/getPokemon.action";
import { PokemonType, PokemonTypeModel } from "@models/pokemonType.model";
import { parseToPokemonTypeModel } from "@utils/parseToPokemonTypeModel";
import {
  getPokemonSizeClassNames,
  PokemonSize,
} from "@utils/getPokemonSizeClassNames";

export interface UsePokemonOptions {
  name: string;
}

export const usePokemon = ({ name }: UsePokemonOptions) => {
  const [data, setData] = useState<PokemonModel | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [gradient, setGradient] = useState<string>("");
  const [types, setTypes] = useState<PokemonTypeModel[]>([]);
  const [size, setSize] = useState<PokemonSize | undefined>();

  useEffect(() => {
    (async () => {
      const _data: PokemonModel | undefined = await getPokemonAction({
        name,
      });

      const _gradient: string = getBackgroundByTypes(_data?.types);

      const typesBase = (_data?.types ?? [])
        .map(({ type }) => type)
        .filter((type) => !!type) as PokemonType[];

      const _types: PokemonTypeModel[] = parseToPokemonTypeModel(typesBase);

      const _size: PokemonSize = getPokemonSizeClassNames({
        height: _data?.height ?? 0,
      });

      setIsLoading(false);
      setGradient(_gradient);
      setTypes(_types);
      setSize(_size);
      setData(_data);
    })();
  }, [name]);

  return {
    data,
    isLoading,
    types,
    gradient,
    size,
  };
};
