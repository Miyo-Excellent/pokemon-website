"use client";
import { PokemonModel } from "@models/pokemon.model";
import { useEffect, useState } from "react";
import { getPokemonAction } from "@/actions/getPokemon.action";
import { PokemonType, PokemonTypeModel } from "@models/pokemonType.model";
import { getClientBackgroundByTypes } from "@utils/client/getClientBackgroundByTypes";
import { clientParseToPokemonTypeModel } from "@utils/client/clientParseToPokemonTypeModel";
import { getClientPokemonSizeClassNames } from "@utils/client/getClientPokemonSizeClassNames";
import { PokemonSize } from "@models/pokemonSize";

export interface UsePokemonOptions {
  filterType?: string;
  name: string;
}

export const usePokemon = ({ name, filterType }: UsePokemonOptions) => {
  const [data, setData] = useState<PokemonModel | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hidden, setHidden] = useState<boolean>(true);
  const [gradient, setGradient] = useState<string>("");
  const [types, setTypes] = useState<PokemonTypeModel[]>([]);
  const [size, setSize] = useState<PokemonSize | undefined>();

  useEffect(() => {
    (async () => {
      const _data: PokemonModel | undefined = await getPokemonAction({
        name,
      });

      const _gradient: string = getClientBackgroundByTypes(_data?.types);

      const typesBase = (_data?.types ?? [])
        .map(({ type }) => type)
        .filter((type) => !!type) as PokemonType[];

      const _types: PokemonTypeModel[] =
        clientParseToPokemonTypeModel(typesBase);

      const _hidden: boolean =
        !!filterType &&
        !_types.some(
          ({ name: typeName = "" }) =>
            !!typeName && new RegExp(typeName, "i").test(filterType),
        );

      const _size: PokemonSize = getClientPokemonSizeClassNames({
        height: _data?.height ?? 0,
      });

      setIsLoading(false);
      setHidden(_hidden);
      setGradient(_gradient);
      setTypes(_types);
      setSize(_size);
      setData(_data);
    })();
  }, [name, filterType]);

  return {
    data,
    isLoading,
    hidden,
    types,
    gradient,
    size,
  };
};
