"use client";
import Image from "next/image";
import { usePokemonCover } from "@hooks/usePokemonCover";
import { PokemonCardCoverSkeleton } from "@components/pokemonCard/pokemonCardCoverSkeleton";

export interface PokemonCardCoverProps {
  cover: string;
  name: string;
  height: number;
}

export const PokemonCardCover = ({
  cover,
  name,
  height,
}: PokemonCardCoverProps) => {
  const { size, elevation, isLoading } = usePokemonCover({ height });

  if (isLoading) return <PokemonCardCoverSkeleton />;

  return (
    <div
      className={`absolute left-0 ${elevation} h-48 w-full flex justify-center items-center`}
    >
      <Image
        alt={name}
        src={cover}
        width={100}
        height={100}
        className={`${size} max-h-[200px] h-auto object-contain transition-all ease-in-out duration-300`}
      />
    </div>
  );
};
