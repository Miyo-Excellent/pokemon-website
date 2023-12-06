"use client";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { PokemonTypeModel } from "@models/pokemonType.model";
import { MouseEventHandler } from "react";

export interface HorizontalTypesProps extends PokemonTypeModel {}

export const HorizontalType = ({
  name,
  icon,
  url,
  color,
}: HorizontalTypesProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const active: boolean = new RegExp(name, "").test(
    searchParams.get("type")?.toString() || "",
  );

  const classes: string = `${
    active ? "border-solid border-2 border-green-500" : ""
  } ${color} flex flex-row justify-center items-center cursor-pointer snap-center w-[35px] max-w-[35px] min-w-[35px] h-[35px] max-h-[35px] min-h-[35px] rounded-3xl`;

  const params: URLSearchParams = new URLSearchParams(searchParams);

  if (active) params.delete("type");
  else params.set("type", name);

  const href: string = `${pathname}?${params.toString()}`;

  const handleClick: MouseEventHandler<HTMLLIElement> = () => {};

  return (
    <li className={classes} onClick={handleClick}>
      <Link
        className="w-full h-full flex-1 flex justify-center items-center text-xs text-center text-white"
        href={href}
      >
        {!!icon ? (
          <Image src={icon} alt={name} className="fill-amber-200 w-6" />
        ) : (
          <img src="#" alt={name} className="fill-amber-200 w-6" />
        )}
      </Link>
    </li>
  );
};
