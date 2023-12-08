"use client";
import { PiLightningBold } from "react-icons/pi";
import Link from "next/link";
import { PokemonBase } from "@models/pokemon.model";
import { useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export interface PokemonCarButtonProps extends Omit<PokemonBase, "url"> {}

export const PokemonCarButton = ({ name }: PokemonCarButtonProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const params: URLSearchParams = new URLSearchParams(searchParams);

  if (name) params.set("pokemon", name);
  else params.delete("pokemon");

  const href: string = `${pathname}?${params.toString()}`;

  return (
    <Link
      scroll={false}
      href={href}
      className="animate-pulse hover:transition hover:duration-300 hover:ease-in-out hover:animate-none hover:shadow-[0_2px_5px_rgba(250,_204,_21,_0.4)] hover:text-yellow-400 text-white mx-auto max-w-min py-2 px-6 rounded-xl border-solid border hover:border-yellow-400 border-gray-600 bg-gray-800 bg-opacity-90 flex flex-row flex-nowrap items-center justify-center gap-1"
    >
      <PiLightningBold className="font-medium text-xl" />

      <span className="whitespace-nowrap font-medium text-sm">Details</span>
    </Link>
  );
};
