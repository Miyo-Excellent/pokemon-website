"use client";
import { capitalize } from "lodash";
import { HorizontalType } from "@components/horizontalTypes/horizontalType";
import { usePokemonTypes } from "@hooks/usePokemonTypes";

export interface HorizontalTypesProps {
  selected?: string;
}

export const HorizontalTypes = ({ selected }: HorizontalTypesProps) => {
  const { data, isLoading, handleClickType, getActiveStatus } =
    usePokemonTypes();

  if (isLoading) return null;

  return (
    <div className="lg:max-w-[50%] xl:max-w-[40%] 2xl:max-w-[30%] w-full flex flex-col flex-nowrap justify-start items-stretch">
      <h4 className="pl-2 mb-1 text-white text-lg">{`Filter by type: ${capitalize(
        !!selected ? selected : "All",
      )}`}</h4>

      <ul className="bg-gray-700 rounded-3xl p-1 w-full overflow-x-auto no-scrollbar snap-x snap-mandatory flex flex-1 flex-row flex-nowrap justify-start items-center gap-2">
        {data.map(({ name = "", icon, color = "" }) => {
          const active: boolean = getActiveStatus(name);

          return (
            <HorizontalType
              key={name}
              icon={icon}
              name={name}
              color={color}
              active={active}
              onClick={handleClickType}
            />
          );
        })}
      </ul>
    </div>
  );
};
