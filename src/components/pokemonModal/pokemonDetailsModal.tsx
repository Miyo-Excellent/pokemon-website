"use client";
import { MouseEventHandler } from "react";
import Image from "next/image";
import { GiBodyHeight, GiWeight, GiSkills } from "react-icons/gi";
import { useRouter, useSearchParams } from "next/navigation";
import { capitalize } from "lodash";
import { PokemonModalCloseButton } from "@/components/pokemonModal/pokemonModalCloseButton";
import { PokemonModalSkeleton } from "@components/pokemonModal/pokemonModalSkeleton";
import { usePokemon } from "@hooks/usePokemon";

export interface PokemonDetailsModalProps {}

export const PokemonDetailsModal = ({}: PokemonDetailsModalProps) => {
  const routes = useRouter();
  const searchParams = useSearchParams();
  const pokemonName: string | null = searchParams.get("pokemon");
  const active = !!pokemonName;

  const { gradient, data, isLoading, types, size } = usePokemon({
    name: pokemonName ?? "",
  });

  const onClose: MouseEventHandler<HTMLButtonElement> = (event) => {
    routes.back();
  };

  if (isLoading) return <PokemonModalSkeleton />;

  return (
    <section
      className={`${
        active ? "" : "hidden"
      } fixed top-0 left-0 bg-gray-950 bg-opacity-80 max-h-full max-w-full h-full w-full z-30 flex justify-center items-center p-10`}
    >
      {!isLoading && (
        <article
          className={`relative bg-white bg-opacity-80 w-[345px] h-[465px] border border-gray-200 rounded-2xl shadow-inner shadow-gray-800 dark:border-gray-700 flex flex-col flex-nowrap items-stretch justify-start g-4`}
        >
          <div className={`${gradient} h-[150px] w-full rounded-t-2xl`} />

          <div className="absolute h-[50px] top-[115px] left-0 w-full rounded-t-2xl flex flex-row flex-nowrap gap-2 p-2">
            {types.map((type) => (
              <div
                key={`modal_pokemon-card_key-${type.name}`}
                className={`py-2 px-4 rounded-xl ${type.color} flex-1 flex flex-row flex-nowrap items-center justify-center gap-2`}
              >
                <Image
                  alt={type?.name ?? ""}
                  src={type.icon}
                  height={50}
                  width={50}
                  className="w-5 h-auto"
                />

                <span className="text-white font-medium text-md">
                  {type.name}
                </span>
              </div>
            ))}
          </div>

          <div
            className={`absolute left-0 ${size?.coverElevation} ${size?.coverSize} h-auto w-full flex justify-center items-center`}
          >
            <Image
              alt={data?.name || ""}
              src={data?.sprites.other?.dream_world.front_default}
              width={100}
              height={100}
              className={`w-auto h-full object-contain rounded-3xl`}
            />
          </div>

          <div className="p-8 flex flex-1 flex-col flex-nowrap justify-start items-stretch">
            <h4 className="border-solid border-t-0 border-r-0 border-l-0 border-b border-gray-400 pb-2 mb-2 text-2xl text-gray-900 font-semibold flex flex-row flex-nowrap gap-2 justify-start items-center">
              {capitalize(pokemonName ?? "")}
            </h4>

            <p className="border-solid border-t-0 border-r-0 border-l-0 border-b border-gray-400 pb-2 mb-2 text-md text-gray-900 font-semibold flex flex-row flex-nowrap gap-2 justify-start items-center">
              <GiBodyHeight className="text-2xl" />
              {"Height: "}
              <span className="font-normal text-md">{data?.height}</span>
            </p>

            <p className="border-solid border-t-0 border-r-0 border-l-0 border-b border-gray-400 pb-2 mb-2 text-md text-gray-900 font-semibold flex flex-row flex-nowrap gap-2 justify-start items-center">
              <GiWeight className="text-3xl" />
              {"Weight: "}
              <span className="font-normal text-md">{data?.weight}</span>
            </p>

            <p className="border-solid border-t-0 border-r-0 border-l-0 border-b border-gray-400 pb-2 mb-2 text-md text-gray-900 font-semibold flex flex-row flex-nowrap gap-2 justify-start items-center">
              <GiSkills className="text-3xl" />
              {"Skills: "}
              <span className="font-normal text-md">
                {(data?.abilities ?? [])
                  .map(({ ability }) => capitalize(ability?.name ?? ""))
                  .join(", ")}
              </span>
            </p>
          </div>

          <footer className="mb-4 px-4">
            <PokemonModalCloseButton onClose={onClose} />
          </footer>
        </article>
      )}
    </section>
  );
};
