import { PokemonType, PokemonTypeModel } from "@models/pokemonType.model";
import { PokemonTypeEnum } from "@enums/PokemonType.enum";
import Bug from "@icons/types/bug.svg";
import Dragon from "@icons/types/dragon.svg";
import Dark from "@icons/types/dark.svg";
import Electric from "@icons/types/electric.svg";
import Fairy from "@icons/types/fairy.svg";
import Fighting from "@icons/types/fighting.svg";
import Fire from "@icons/types/fire.svg";
import Flying from "@icons/types/flying.svg";
import Ghost from "@icons/types/ghost.svg";
import Grass from "@icons/types/grass.svg";
import Ground from "@icons/types/ground.svg";
import Ice from "@icons/types/ice.svg";
import Normal from "@icons/types/normal.svg";
import Poison from "@icons/types/poison.svg";
import Psychic from "@icons/types/psychic.svg";
import Rock from "@icons/types/rock.svg";
import Steel from "@icons/types/steel.svg";
import Water from "@icons/types/water.svg";

export const parseToPokemonTypeModel = (
  data: PokemonType[],
): PokemonTypeModel[] =>
  data
    .filter(({ name }) => !!name)
    .map(({ name, url }) => {
      let icon: string | undefined;
      let color: string =
        "bg-gradient-to-r from-slate-700 via-slate-400 to-slate-600";

      const exp: RegExp = new RegExp(name, "gi");

      if (exp.test(PokemonTypeEnum.BUG)) {
        icon = Bug;
        color = "bg-gradient-to-r from-green-700 via-green-400 to-green-600";
      } else if (exp.test(PokemonTypeEnum.DRAGON)) {
        icon = Dragon;
        color = "bg-gradient-to-r from-orange-700 via-orange-400 to-orange-600";
      } else if (exp.test(PokemonTypeEnum.DARK)) {
        icon = Dark;
        color = "bg-gradient-to-r from-gray-700 via-gray-400 to-gray-600";
      } else if (exp.test(PokemonTypeEnum.ELECTRIC)) {
        icon = Electric;
        color = "bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-600";
      } else if (exp.test(PokemonTypeEnum.FAIRY)) {
        icon = Fairy;
        color = "bg-gradient-to-r from-rose-700 via-rose-400 to-rose-600";
      } else if (exp.test(PokemonTypeEnum.FIGHTING)) {
        icon = Fighting;
        color = "bg-gradient-to-r from-pink-700 via-pink-400 to-pink-600";
      } else if (exp.test(PokemonTypeEnum.FIRE)) {
        icon = Fire;
        color = "bg-gradient-to-r from-red-700 via-red-400 to-red-600";
      } else if (exp.test(PokemonTypeEnum.FLYING)) {
        icon = Flying;
        color = "bg-gradient-to-r from-sky-700 via-sky-400 to-sky-600";
      } else if (exp.test(PokemonTypeEnum.GHOST)) {
        icon = Ghost;
        color = "bg-gradient-to-r from-slate-700 via-slate-400 to-slate-600";
      } else if (exp.test(PokemonTypeEnum.GRASS)) {
        icon = Grass;
        color = "bg-gradient-to-r from-stone-700 via-stone-400 to-stone-600";
      } else if (exp.test(PokemonTypeEnum.GROUND)) {
        icon = Ground;
        color = "bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-600";
      } else if (exp.test(PokemonTypeEnum.ICE)) {
        icon = Ice;
        color = "bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600";
      } else if (exp.test(PokemonTypeEnum.NORMAL)) {
        icon = Normal;
        color =
          "bg-gradient-to-r from-neutral-700 via-neutral-400 to-neutral-600";
      } else if (exp.test(PokemonTypeEnum.POISON)) {
        icon = Poison;
        color = "bg-gradient-to-r from-purple-700 via-purple-400 to-purple-600";
      } else if (exp.test(PokemonTypeEnum.PSYCHIC)) {
        icon = Psychic;
        color =
          "bg-gradient-to-r from-fuchsia-700 via-fuchsia-400 to-fuchsia-600";
      } else if (exp.test(PokemonTypeEnum.ROCK)) {
        icon = Rock;
        color = "bg-gradient-to-r from-amber-700 via-amber-400 to-amber-600";
      } else if (exp.test(PokemonTypeEnum.STEEL)) {
        icon = Steel;
        color = "bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600";
      } else if (exp.test(PokemonTypeEnum.WATER)) {
        icon = Water;
        color = "bg-gradient-to-r from-blue-700 via-blue-400 to-blue-600";
      }

      return { name, url, icon, color };
    });
