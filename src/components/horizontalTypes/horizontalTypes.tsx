import { capitalize } from "lodash";
import { pokemonAPI } from "@services/pokemonApi.service";
import { PokemonType } from "@models/pokemonType.model";
import { HorizontalType } from "@components/horizontalTypes/horizontalType";
import { parseToPokemonTypeModel } from "@utils/parseToPokemonTypeModel";

export interface HorizontalTypesProps {
  selected?: string;
}

export const HorizontalTypes = async ({ selected }: HorizontalTypesProps) => {
  const response = await pokemonAPI.pokemon.type.all({
    offset: 0,
    limit: 50,
  });

  const { results: types } = response.data;

  const typesWithIcons = parseToPokemonTypeModel(types as PokemonType[]);

  return (
    <div className="w-full md:w-1/2 flex flex-col flex-nowrap justify-start items-stretch">
      <h4 className="pl-2 mb-1 text-white text-lg">{`Filtrar por tipo: ${capitalize(
        !!selected ? selected : "All",
      )}`}</h4>

      <ul className="natures bg-gray-700 rounded-3xl p-1 w-full overflow-x-auto no-scrollbar snap-x snap-mandatory flex flex-1 flex-row flex-nowrap justify-start items-center gap-2">
        {typesWithIcons.map((type) => (
          <HorizontalType key={type.name} {...type} />
        ))}
      </ul>
    </div>
  );
};
