import { PokemonBase } from "@models/pokemon.model";
import { PokemonCard } from "@components/pokemonCard/pokemonCard";
import { PokemonsListPaginationButton } from "@components/pokemonsList/PokemonsListButton";
import { Suspense } from "react";
import { PokemonCardSkeleton } from "@components/pokemonCard/pokemonCardSkeleton";
import { getPokemonsAction } from "@actions/getPokemons.action";

export interface PokemonsListProps {
  limit?: number;
  page: number;
  type: string;
  query: string;
}

export const PokemonsList = async ({
  limit = 50,
  page,
  type,
  query,
}: PokemonsListProps) => {
  const parsedOffset: number = page < 1 ? 1 : page * limit;
  let parsedLimit: number = limit;

  if (query) parsedLimit = 500;
  else if (type) parsedLimit = 100;

  const response = await getPokemonsAction({
    offset: parsedOffset,
    limit: parsedLimit,
  });

  const { results: pokemons = [], count = 0 } = response;

  const isMinItems: boolean = page <= 1;
  const isMaxItems: boolean = parsedLimit * page >= count;

  const filteredPokemons: PokemonBase[] = pokemons.filter(
    (pokemon: PokemonBase) => {
      const matchSearch: boolean = new RegExp(query, "i").test(
        pokemon?.name ?? "",
      );

      if (!!query) return matchSearch;

      return true;
    },
  );
  return (
    <section className="w-full flex flex-col justify-between items-stretch gap-10">
      <div className="w-full p-4 pt-16 flex flex-row flex-wrap justify-center items-center gap-x-10 gap-y-20">
        {filteredPokemons.map(({ name = "" }: PokemonBase) => (
          <Suspense key={`pokemon-${name}`} fallback={<PokemonCardSkeleton />}>
            <PokemonCard
              control-id={`pokemon-${name}`}
              filterType={type}
              name={name}
            />
          </Suspense>
        ))}
      </div>

      <footer className="w-full h-auto grid grid-cols-3">
        {!isMinItems ? <PokemonsListPaginationButton axis="left" /> : <div />}

        <div className="flex justify-center items-center">
          <span className="text-white font-normal text-xl">{`${page}`}</span>
        </div>

        {!isMaxItems ? <PokemonsListPaginationButton axis="right" /> : <div />}
      </footer>
    </section>
  );
};
