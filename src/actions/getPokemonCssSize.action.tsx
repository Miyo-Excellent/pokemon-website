"use server";

import { PokemonSize } from "@models/pokemonSize";
import { getPokemonSizeClassNames } from "@utils/getPokemonSizeClassNames";

export interface GetPokemonCssSizeActionOptions {
  height: number;
}

export const getPokemonCssSizeAction = async ({
  height = 0,
}: GetPokemonCssSizeActionOptions): Promise<PokemonSize | undefined> => {
  try {
    return getPokemonSizeClassNames({ height });
  } catch (error) {
    console.error(error);
  }
};
