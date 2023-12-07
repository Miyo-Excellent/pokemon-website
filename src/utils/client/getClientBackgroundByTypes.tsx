"use client";
import { TypeModel } from "@models/type.model";
import { getClientPokemonCardGradientByType } from "@utils/client/getClientPokemonCardGradientByType";

export const getClientBackgroundByTypes = (types: TypeModel[] = []): string => {
  const one: string = types[0]?.type?.name ?? "";
  const two: string = types[1]?.type?.name ?? "";
  const three: string = types[2]?.type?.name ?? "";

  let from: string = "from-blue-950";
  let via: string = "via-teal-800";
  let to: string = "to-emerald-700";

  if (one && two && three) {
    from = getClientPokemonCardGradientByType(three, "from");
    via = getClientPokemonCardGradientByType(two, "via");
    to = getClientPokemonCardGradientByType(one, "to");
  } else if (one && two) {
    from = getClientPokemonCardGradientByType(two, "from");
    via = getClientPokemonCardGradientByType(two, "via");
    to = getClientPokemonCardGradientByType(one, "to");
  } else if (one) {
    from = getClientPokemonCardGradientByType(one, "from");
    via = getClientPokemonCardGradientByType(one, "via");
    to = getClientPokemonCardGradientByType(one, "to");
  } else return getClientPokemonCardGradientByType(three, "from");

  return `bg-gradient-to-b ${from} ${via} ${to}`;
};
