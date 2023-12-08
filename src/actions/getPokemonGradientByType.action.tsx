"use server";

import { getPokemonCardGradientByType } from "@utils/getPokemonCardGradientByType";

export interface GetPokemonGradientByTypeActionOptions {
  type: string;
  by: "from" | "to" | "via" | "none";
}

export const getPokemonGradientByTypeAction = async ({
  type,
  by,
}: GetPokemonGradientByTypeActionOptions): Promise<string | undefined> => {
  try {
    return getPokemonCardGradientByType(type, by);
  } catch (error) {
    console.error(error);
  }
};
