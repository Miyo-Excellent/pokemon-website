"use client";
import { PokemonModel } from "@models/pokemon.model";
import { useEffect, useState } from "react";
import { getPokemonAction } from "@actions/getPokemon.action";
import { PokemonType, PokemonTypeModel } from "@models/pokemonType.model";
import { PokemonSize } from "@models/pokemonSize";
import { getPokemonBackgroundByTypesAction } from "@actions/getPokemonBackgroundByTypes.action";
import { getPokemonCssSizeAction } from "@actions/getPokemonCssSize.action";
import { getParsedPokemonAction } from "@actions/getPokemonTypesModel.action";

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

      const _gradient: string =
        (await getPokemonBackgroundByTypesAction({
          types: _data?.types ?? [],
        })) ?? "";

      const typesBase: PokemonType[] = (_data?.types ?? [])
        .map(({ type }) => type)
        .filter((type) => !!type) as PokemonType[];

      const _types: PokemonTypeModel[] =
        (await getParsedPokemonAction({
          types: typesBase,
        })) || [];

      const _hidden: boolean =
        !!filterType &&
        !_types.some(
          ({ name: typeName = "" }) =>
            !!typeName && new RegExp(typeName, "i").test(filterType),
        );

      const _size: PokemonSize | undefined = await getPokemonCssSizeAction({
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
