import { PokemonBase, PokemonModel } from "@models/pokemon.model";
import { pokemonAPI } from "@services/pokemonApi.service";
import { PokemonCardBackground } from "@components/pokemonCard/pokemonCardBackground";
import { PokemonCardContent } from "@components/pokemonCard/pokemonCardContent";
import { getBackgroundByTypes } from "@utils/getBackgroundByTypes";
import pokeballSvg from "@icons/pokeball.svg";

export interface PokemonCardProps extends PokemonBase {
  filterType?: string;
}

export const PokemonCard = async ({
  filterType,
  ...pokemonBase
}: PokemonCardProps) => {
  const { url, name } = pokemonBase;

  const urlChunks: string[] = url.split("/").filter((chunk) => !!chunk);
  const id: string = urlChunks[urlChunks.length - 1];

  const response = await pokemonAPI.pokemon.one(Number(id));

  const data: PokemonModel | undefined = response.data as
    | PokemonModel
    | undefined;

  const gradient: string = getBackgroundByTypes(data?.types);

  const hidden: boolean =
    !!filterType &&
    !(data?.types || []).some(({ type }) =>
      new RegExp(type.name, "i").test(filterType),
    );

  return (
    <article
      className={`${
        hidden ? "hidden" : ""
      } ${gradient} relative w-[250px] h-[350px] shadow-inner shadow-gray-800 border border-solid border-opacity-50 border-gray-300 rounded-3xl`}
    >
      <PokemonCardBackground image={pokeballSvg} />
      {!!data && <PokemonCardContent {...data} />}
    </article>
  );
};
