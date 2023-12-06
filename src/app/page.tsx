import { Suspense } from "react";
import { Header } from "@components/header";
import { PokemonsList } from "@components/pokemonsList/pokemonsList";
import { PokemonDetailsModal } from "@components/pokemonModal/pokemonDetailsModal";
import { PokemonsListSkeleton } from "@components/pokemonsList/pokemonsListSkeleton";
import { montserrat } from "@app/fonts";
import { PokemonModalSkeleton } from "@components/pokemonModal/pokemonModalSkeleton";

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

  return (
    <body
      className={`${montserrat.className}  ${
        hasPokemonParam ? "overflow-y-hidden" : "overflow-y-auto"
      } antialiased bg-gray-950 min-h-screen relative`}
    >
      {hasPokemonParam && (
        <Suspense fallback={<PokemonModalSkeleton />}>
          <PokemonDetailsModal />
        </Suspense>
      )}

      <main className="pb-4 pt-4 pl-12 pr-12 flex flex-col justify-start items-stretch gap-10">
        <Header type={searchParams?.type} />
        <Suspense fallback={<PokemonsListSkeleton />}>
          <PokemonsList
            page={Number(searchParams?.page || "1")}
            query={searchParams?.query}
            type={searchParams?.type}
          />
        </Suspense>
      </main>
    </body>
  );
}
