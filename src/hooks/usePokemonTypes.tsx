"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PokemonType, PokemonTypeModel } from "@models/pokemonType.model";
import { getPokemonTypesAction } from "@actions/getPokemonTypes.action";
import { getParsedPokemonAction } from "@actions/getPokemonTypesModel.action";

export interface UsePokemonOptions {}

export const usePokemonTypes = ({}: UsePokemonOptions = {}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [data, setData] = useState<PokemonTypeModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const base: PokemonType[] = (await getPokemonTypesAction()) ?? [];
      const parsed: PokemonTypeModel[] =
        (await getParsedPokemonAction({ types: base })) ?? [];

      setIsLoading(false);
      setData(parsed);
    })();
  }, []);

  const handleClickType: (options: {
    name: string;
    active: boolean;
  }) => void = ({ name, active }) => {
    const params: URLSearchParams = new URLSearchParams(searchParams);

    if (active) params.delete("type");
    else params.set("type", name);

    const href: string = `${pathname}?${params.toString()}`;

    router.push(href);
  };

  const getActiveStatus = (name: string): boolean =>
    new RegExp(name, "").test(searchParams.get("type")?.toString() || "");

  return {
    data,
    isLoading,
    handleClickType,
    getActiveStatus,
  };
};
