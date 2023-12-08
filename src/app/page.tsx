import { Suspense } from "react";
import { Header } from "@components/header";
import { PokemonsList } from "@components/pokemonsList/pokemonsList";
import { PokemonDetailsModal } from "@components/pokemonModal/pokemonDetailsModal";
import { PokemonsListSkeleton } from "@components/pokemonsList/pokemonsListSkeleton";

export interface RootPageProps {
  searchParams?: {
    query?: string;
    page?: string;
    type?: string;
    pokemon?: string;
  };
}

export default function RootPage({ searchParams }: RootPageProps) {
  const hasPokemonParam: boolean = !!searchParams?.pokemon;
  const page: number = Number(searchParams?.page ?? "1");
  const type: string = searchParams?.type ?? "";
  const query: string = searchParams?.query ?? "";

  return (
    <main
      className={`${
        hasPokemonParam ? "overflow-y-hidden" : "overflow-y-auto"
      } antialiased min-h-screen w-full h-full p-8 bg-gray-950 min-h-screen relative flex-1 flex flex-col justify-start items-center gap-8`}
    >
      {hasPokemonParam && <PokemonDetailsModal />}

      <Header type={searchParams?.type} />

      <Suspense fallback={<PokemonsListSkeleton />}>
        <PokemonsList page={page} type={type} query={query} />
      </Suspense>
    </main>
  );
}
