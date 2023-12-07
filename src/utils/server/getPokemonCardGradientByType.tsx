"use server";
import { PokemonTypeEnum } from "@enums/PokemonType.enum";

export const getPokemonCardGradientByType = (
  typeName: string = "",
  by: "from" | "to" | "via" | "none" = "none",
): string => {
  const exp: RegExp = new RegExp(typeName, "gi");
  const defaultColor: string = "from-green-950 via-blue-950 to-blue-700";

  if (!typeName) return defaultColor;
  else if (by === "none") return defaultColor;
  else if (exp.test(PokemonTypeEnum.BUG)) {
    if (by === "from") return "from-green-950";
    else if (by === "via") return "via-green-800";
    else if (by === "to") return "to-green-700";
    else return "from-green-950 via-green-800 to-green-700";
  } else if (exp.test(PokemonTypeEnum.DRAGON)) {
    if (by === "from") return "from-orange-950";
    else if (by === "via") return "via-orange-800";
    else if (by === "to") return "to-orange-700";
    else return "from-orange-950 via-orange-800 to-orange-700";
  } else if (exp.test(PokemonTypeEnum.DARK)) {
    if (by === "from") return "from-gray-950";
    else if (by === "via") return "via-gray-800";
    else if (by === "to") return "to-gray-700";
    else return "from-gray-950 via-gray-800 to-gray-700";
  } else if (exp.test(PokemonTypeEnum.ELECTRIC)) {
    if (by === "from") return "from-yellow-950";
    else if (by === "via") return "via-yellow-800";
    else if (by === "to") return "to-yellow-700";
    else return "from-yellow-950 via-yellow-800 to-yellow-700";
  } else if (exp.test(PokemonTypeEnum.FAIRY)) {
    if (by === "from") return "from-rose-950";
    else if (by === "via") return "via-rose-800";
    else if (by === "to") return "to-rose-700";
    else return "from-rose-950 via-rose-800 to-rose-700";
  } else if (exp.test(PokemonTypeEnum.FIGHTING)) {
    if (by === "from") return "from-pink-950";
    else if (by === "via") return "via-pink-800";
    else if (by === "to") return "to-pink-700";
    else return "from-pink-950 via-pink-800 to-pink-700";
  } else if (exp.test(PokemonTypeEnum.FIRE)) {
    if (by === "from") return "from-red-950";
    else if (by === "via") return "via-red-800";
    else if (by === "to") return "to-red-700";
    else return "from-red-950 via-red-800 to-red-700";
  } else if (exp.test(PokemonTypeEnum.FLYING)) {
    if (by === "from") return "from-sky-950";
    else if (by === "via") return "via-sky-800";
    else if (by === "to") return "to-sky-700";
    else return "from-sky-950 via-sky-800 to-sky-700";
  } else if (exp.test(PokemonTypeEnum.GHOST)) {
    if (by === "from") return "from-slate-950";
    else if (by === "via") return "via-slate-800";
    else if (by === "to") return "to-slate-700";
    else return "from-slate-950 via-slate-800 to-slate-700";
  } else if (exp.test(PokemonTypeEnum.GRASS)) {
    if (by === "from") return "from-stone-950";
    else if (by === "via") return "via-stone-800";
    else if (by === "to") return "to-stone-700";
    else return "from-stone-950 via-stone-800 to-stone-700";
  } else if (exp.test(PokemonTypeEnum.GROUND)) {
    if (by === "from") return "from-zinc-950";
    else if (by === "via") return "via-zinc-800";
    else if (by === "to") return "to-zinc-700";
    else return "from-zinc-950 via-zinc-800 to-zinc-700";
  } else if (exp.test(PokemonTypeEnum.ICE)) {
    if (by === "from") return "from-cyan-950";
    else if (by === "via") return "via-cyan-800";
    else if (by === "to") return "to-cyan-700";
    else return "from-cyan-950 via-cyan-800 to-cyan-700";
  } else if (exp.test(PokemonTypeEnum.NORMAL)) {
    if (by === "from") return "from-neutral-950";
    else if (by === "via") return "via-neutral-800";
    else if (by === "to") return "to-neutral-700";
    else return "from-neutral-950 via-neutral-800 to-neutral-700";
  } else if (exp.test(PokemonTypeEnum.POISON)) {
    if (by === "from") return "from-purple-950";
    else if (by === "via") return "via-purple-800";
    else if (by === "to") return "to-purple-700";
    else return "from-purple-950 via-purple-800 to-purple-700";
  } else if (exp.test(PokemonTypeEnum.PSYCHIC)) {
    if (by === "from") return "from-fuchsia-950";
    else if (by === "via") return "via-fuchsia-800";
    else if (by === "to") return "to-fuchsia-700";
    else return "from-fuchsia-950 via-fuchsia-800 to-fuchsia-700";
  } else if (exp.test(PokemonTypeEnum.ROCK)) {
    if (by === "from") return "from-amber-950";
    else if (by === "via") return "via-amber-800";
    else if (by === "to") return "to-amber-700";
    else return "from-amber-950 via-amber-800 to-amber-700";
  } else if (exp.test(PokemonTypeEnum.STEEL)) {
    if (by === "from") return "from-cyan-950";
    else if (by === "via") return "via-cyan-800";
    else if (by === "to") return "to-cyan-700";
    else return "from-cyan-950 via-cyan-800 to-cyan-700";
  } else if (exp.test(PokemonTypeEnum.WATER)) {
    if (by === "from") return "from-blue-950";
    else if (by === "via") return "via-blue-800";
    else if (by === "to") return "to-blue-700";
    else return "from-blue-950 via-blue-800 to-blue-700";
  } else return defaultColor;
};
