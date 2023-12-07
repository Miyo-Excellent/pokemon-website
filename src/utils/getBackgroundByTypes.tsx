import { getPokemonCardGradientByType } from "@utils/getPokemonCardGradientByType";
import { TypeModel } from "@models/type.model";

export const getBackgroundByTypes = (types: TypeModel[] = []): string => {
  const one: string = types[0]?.type?.name ?? "";
  const two: string = types[1]?.type?.name ?? "";
  const three: string = types[2]?.type?.name ?? "";

  let from: string = "from-blue-950";
  let via: string = "via-teal-800";
  let to: string = "to-emerald-700";

  if (one && two && three) {
    from = getPokemonCardGradientByType(three, "from");
    via = getPokemonCardGradientByType(two, "via");
    to = getPokemonCardGradientByType(one, "to");
  } else if (one && two) {
    from = getPokemonCardGradientByType(two, "from");
    via = getPokemonCardGradientByType(two, "via");
    to = getPokemonCardGradientByType(one, "to");
  } else if (one) {
    from = getPokemonCardGradientByType(one, "from");
    via = getPokemonCardGradientByType(one, "via");
    to = getPokemonCardGradientByType(one, "to");
  } else return getPokemonCardGradientByType(three, "from");

  return `bg-gradient-to-b ${from} ${via} ${to}`;
};
