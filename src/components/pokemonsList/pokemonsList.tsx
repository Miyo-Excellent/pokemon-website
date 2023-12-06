import { Suspense } from "react";
import { PokemonBase } from "@models/pokemon.model";
import { pokemonAPI } from "@services/pokemonApi.service";
import { PokemonCard } from "@components/pokemonCard/pokemonCard";
import { PokemonCardSkeleton } from "@components/pokemonCard/pokemonCardSkeleton";
import { PokemonsListPaginationButton } from "@components/pokemonsList/PokemonsListButton";

export interface PokemonsListProps {
  limit?: number;
  page?: number;
  query?: string;
  type?: string;
}

export const PokemonsList = async ({
  type = "",
  query = "",
  limit = 70,
  page = 1,
}: PokemonsListProps) => {
  let parsedLimit: number = limit;

  if (!!query) parsedLimit = 1000;
  else if (!!type) parsedLimit = 500;

  const parsedOffset: number = page < 1 ? 1 : page * parsedLimit;

  const response = await pokemonAPI.pokemon.all({
    offset: parsedOffset,
    limit: parsedLimit,
  });

  const { results: pokemons = [], count = 0 } = response.data;

  const filteredPokemons = !query
    ? pokemons
    : pokemons.filter(({ name }: PokemonBase) =>
        new RegExp(query, "gi").test(name),
      );

  const isMinItems: boolean = page <= 1;
  const isMaxItems: boolean = parsedLimit * page >= count;

  return (
    <section className="w-full flex flex-col justify-between items-stretch gap-10">
      <div className="w-full p-4 pt-16 flex flex-row flex-wrap justify-center items-center gap-x-10 gap-y-20">
        {filteredPokemons.map(({ name, url }: PokemonBase) => (
          <Suspense key={`pokemon-${name}`} fallback={<PokemonCardSkeleton />}>
            <PokemonCard filterType={type} url={url} name={name} />
          </Suspense>
        ))}
      </div>

      <footer className="w-full h-auto grid grid-cols-3">
        {!isMinItems ? <PokemonsListPaginationButton axis="left" /> : <div />}

        <div className="flex justify-center items-center">
          <span className="text-white font-normal text-xl">
            {page.toString()}
          </span>
        </div>

        {!isMaxItems ? <PokemonsListPaginationButton axis="right" /> : <div />}
      </footer>
    </section>
  );
};
