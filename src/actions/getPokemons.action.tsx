"use server";

import { pokemonAPI } from "@services/pokemonApi.service";
import { PokemonModel } from "@models/pokemon.model";

export interface getPokemonsActionOptions {
  offset?: number;
  limit?: number;
}

export const getPokemonsAction = async ({
  offset,
  limit,
}: getPokemonsActionOptions = {}): Promise<any | undefined> => {
  try {
    const response = await pokemonAPI.pokemon.all({
      offset,
      limit,
    });

    return response.data as any | undefined;
  } catch (error) {
    console.error(error);
  }
};
