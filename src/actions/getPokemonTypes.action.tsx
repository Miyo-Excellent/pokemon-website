"use server";

import { pokemonAPI } from "@services/pokemonApi.service";
import { PokemonType } from "@models/pokemonType.model";

export interface getPokemonTypesActionOptions {
  offset?: number;
  limit?: number;
}

export const getPokemonTypesAction = async ({
  offset = 0,
  limit = 50,
}: getPokemonTypesActionOptions = {}): Promise<PokemonType[] | undefined> => {
  try {
    const response = await pokemonAPI.pokemon.type.all({
      offset,
      limit,
    });

    return response.data.results as PokemonType[] | undefined;
  } catch (error) {
    console.error(error);
  }
};
