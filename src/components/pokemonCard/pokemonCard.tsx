import { PokemonCardBackground } from "@components/pokemonCard/pokemonCardBackground";
import { PokemonCardContent } from "@components/pokemonCard/pokemonCardContent";
import pokeballSvg from "@icons/pokeball.svg";
import { getBackgroundByTypes } from "@utils/getBackgroundByTypes";
import { getPokemonAction } from "@actions/getPokemon.action";
import { PokemonModel } from "@models/pokemon.model";
import { PokemonCardSkeleton } from "@components/pokemonCard/pokemonCardSkeleton";
import { getPokemonSizeClassNames } from "@utils/getPokemonSizeClassNames";
import { PokemonType, PokemonTypeModel } from "@models/pokemonType.model";
import { parseToPokemonTypeModel } from "@utils/parseToPokemonTypeModel";

export interface PokemonCardProps {
  name: string;
  filterType?: string;
}

export const PokemonCard = async ({
  name,
  filterType = "",
}: PokemonCardProps) => {
  const data: PokemonModel | undefined = await getPokemonAction({ name });

  const gradient: string = getBackgroundByTypes(data?.types ?? []);

  const hidden: boolean =
    !!filterType &&
    !(data?.types ?? []).some(
      ({ type }) =>
        !!type?.name && new RegExp(type?.name, "i").test(filterType),
    );

  if (!data) return <PokemonCardSkeleton />;

  const { coverElevation, coverSize } = getPokemonSizeClassNames({ height: 0 });

  const typesBase = (data?.types ?? [])
    .map(({ type }) => type)
    .filter((type) => !!type) as PokemonType[];

  const parsedTypes: PokemonTypeModel[] = parseToPokemonTypeModel(typesBase);

  const cover: string =
    data?.sprites.other?.dream_world.front_default ??
    data?.sprites.other?.["official-artwork"].front_default ??
    "#";

  return (
    <article
      className={`${
        hidden ? "hidden" : ""
      } ${gradient} relative w-[250px] h-[350px] shadow-inner shadow-gray-800 border border-solid border-opacity-50 border-gray-300 rounded-3xl`}
    >
      <PokemonCardBackground image={pokeballSvg} />
      <PokemonCardContent {...data} parsedTypes={parsedTypes} cover={cover} />
    </article>
  );
};
