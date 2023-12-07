"use server";

import { pokemonAPI } from "@services/pokemonApi.service";
import { PokemonModel } from "@models/pokemon.model";
import { isNumber } from "lodash";

export interface getPokemonActionOptions {
  name?: string;
  id?: number;
}

export const getPokemonAction = async ({
  name,
  id = 1,
}: getPokemonActionOptions): Promise<PokemonModel | undefined> => {
  try {
    const response = await pokemonAPI.pokemon.one(name || id.toString());

    return response.data as PokemonModel | undefined;
  } catch (error) {
    console.error(error);
  }
};
