"use client";
import { useEffect, useState } from "react";
import { getPokemonsAction } from "@actions/getPokemons.action";
import { PokemonBase, PokemonModel } from "@models/pokemon.model";
import { getPokemonAction } from "@actions/getPokemon.action";

export interface UsePokemonsListOptions {
  type?: string;
  query?: string;
  page?: number;
  limit?: number;
}

export const usePokemonsList = ({
  type = "",
  query = "",
  limit = 8,
  page = 1,
}: UsePokemonsListOptions = {}) => {
  const [pokemons, setPokemons] = useState<PokemonBase[]>([]);
  const [isMinItems, setIsMinItems] = useState<boolean>(true);
  const [isMaxItems, setIsMaxItems] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const parsedOffset: number = page < 1 ? 1 : page * limit;

      const response = await getPokemonsAction({
        offset: parsedOffset,
        limit,
      });

      if (response) {
        const { results: pokemons = [], count = 0 } = response;

        const filteredPokemons: PokemonBase[] = pokemons;

        const isMinItems: boolean = page <= 1;
        const isMaxItems: boolean = limit * page >= count;

        setPokemons(filteredPokemons);
        setIsMinItems(isMinItems);
        setIsMaxItems(isMaxItems);
        setIsLoading(false);
      }
    })();
  }, [page, type, query, limit]);

  return {
    pokemons,
    isMinItems,
    isMaxItems,
    isLoading,
  };
};
