import { PokemonCardBackground } from "@components/pokemonCard/pokemonCardBackground";
import { PokemonCardContent } from "@components/pokemonCard/pokemonCardContent";
import pokeballSvg from "@icons/pokeball.svg";
import { getBackgroundByTypes } from "@utils/getBackgroundByTypes";
import { getPokemonAction } from "@/actions/getPokemon.action";
import { PokemonModel } from "@models/pokemon.model";

export interface PokemonCardProps {
  name: string;
}

export const PokemonCard = async ({ name }: PokemonCardProps) => {
  const data: PokemonModel | undefined = await getPokemonAction({ name });

  const gradient: string = getBackgroundByTypes(data?.types ?? []);

  return (
    <article
      className={`${gradient} relative w-[250px] h-[350px] shadow-inner shadow-gray-800 border border-solid border-opacity-50 border-gray-300 rounded-3xl`}
    >
      <PokemonCardBackground image={pokeballSvg} />
      {!!data && <PokemonCardContent {...data} />}
    </article>
  );
};
