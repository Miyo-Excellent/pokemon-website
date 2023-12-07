import { PokemonCardSkeleton } from "@components/pokemonCard/pokemonCardSkeleton";

export interface PokemonsListSkeletonProps {}

export const PokemonsListSkeleton = ({}: PokemonsListSkeletonProps) => {
  return (
    <section className="w-full flex flex-col justify-between items-stretch gap-10">
      <div className="w-full p-4 pt-16 flex flex-row flex-wrap justify-center items-center gap-x-10 gap-y-20">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((key: number) => (
          <PokemonCardSkeleton key={key} />
        ))}
      </div>
    </section>
  );
};
