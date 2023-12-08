"use server";

import { TypeModel } from "@models/type.model";
import { getBackgroundByTypes } from "@utils/getBackgroundByTypes";

export interface GetPokemonBackgroundByTypesActionOptions {
  types: TypeModel[];
}

export const getPokemonBackgroundByTypesAction = async ({
  types = [],
}: GetPokemonBackgroundByTypesActionOptions): Promise<string | undefined> => {
  try {
    return getBackgroundByTypes(types);
  } catch (error) {
    console.error(error);
  }
};
