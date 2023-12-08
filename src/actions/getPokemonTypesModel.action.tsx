"use server";

import { PokemonType, PokemonTypeModel } from "@models/pokemonType.model";
import { parseToPokemonTypeModel } from "@utils/parseToPokemonTypeModel";

export interface GetPokemonBackgroundByTypesActionOptions {
  types?: PokemonType[];
}

export const getParsedPokemonAction = async ({
  types = [],
}: GetPokemonBackgroundByTypesActionOptions): Promise<
  PokemonTypeModel[] | undefined
> => {
  try {
    return parseToPokemonTypeModel(types);
  } catch (error) {
    console.error(error);
  }
};
