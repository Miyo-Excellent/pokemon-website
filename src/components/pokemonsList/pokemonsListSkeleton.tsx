import { PokemonCardSkeleton } from "@components/pokemonCard/pokemonCardSkeleton";

export interface PokemonsListSkeletonProps {}

export const PokemonsListSkeleton = ({}: PokemonsListSkeletonProps) => {
  return (
    <div className="w-full h-full min-h-screen bg-gray-800">
      <PokemonCardSkeleton />
    </div>
  );
};
