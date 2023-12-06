import Image from "next/image";
import { GiBodyHeight, GiWeight } from "react-icons/gi";
import { capitalize } from "lodash";
import { PokemonCarButton } from "@components/pokemonCard/PokemonCarButton";
import { PokemonModel } from "@models/pokemon.model";
import { TypeModel } from "@models/type.model";
import { PokemonType, PokemonTypeModel } from "@models/pokemonType.model";
import { parseToPokemonTypeModel } from "@utils/parseToPokemonTypeModel";
import { getPokemonSizeClassNames } from "@utils/getPokemonSizeClassNames";

export interface PokemonCardContentProps extends Omit<PokemonModel, "types"> {
  types?: TypeModel[];
}

export const PokemonCardContent = ({
  name,
  sprites,
  types = [],
  height,
  weight,
}: PokemonCardContentProps) => {
  const parsedTypes: PokemonTypeModel[] = parseToPokemonTypeModel(
    types.map<PokemonType>(({ type }) => type),
  );

  const {
    isVeryLarge,
    isLarge,
    isMedium,
    isSmall,
    isVerySmall,
    coverElevation,
    coverSize,
  } = getPokemonSizeClassNames({ height });

  return (
    <div className="relative p-4 w-full h-full flex flex-col justify-start items-stretch gap-1 z-20">
      {!!sprites.other?.dream_world.front_default && (
        <div
          className={`absolute left-0 ${coverElevation} h-48 w-full flex justify-center items-center`}
        >
          <Image
            alt={name}
            src={sprites.other?.dream_world.front_default}
            width={100}
            height={100}
            className={`${coverSize} max-h-[200px] h-auto object-contain`}
          />
        </div>
      )}

      <div className="flex-1 h-max w-full" />

      <div className="flex justify-center items-center gap-2">
        {name && (
          <>
            <span className="text-sm">⚪</span>
            <h5 className="text-white font-semibold text-2xl">
              {capitalize(name)}
            </h5>
            <span className="text-sm">⚪</span>
          </>
        )}
      </div>

      <div className="flex flex-row flex-nowrap gap-2 p-2">
        {parsedTypes.map((type) => (
          <div
            key={`pokemon-card_key-${type.name}`}
            className={`py-2 px-4 rounded-xl ${type.color} flex-1 flex flex-row flex-nowrap items-center justify-center gap-2`}
          >
            <Image
              alt={type.name}
              src={type.icon}
              height={50}
              width={50}
              className="w-5 h-auto"
            />

            <span className="text-white font-medium text-md">{type.name}</span>
          </div>
        ))}
      </div>

      <div className="p-2 flex flex-row flex-nowrap">
        <div className="flex-1 flex flex-row flex-nowrap items-end justify-center gap-1">
          <GiBodyHeight className="text-2xl text-white" />

          <span className="text-center text-white font-semibold text-sm">
            {`${height} M`}
          </span>
        </div>

        <div className="flex-1 flex flex-row flex-nowrap items-center justify-end gap-1">
          <GiWeight className="text-3xl text-white" />

          <span className="text-center text-white font-semibold text-sm">
            {`${weight} KG`}
          </span>
        </div>
      </div>

      <PokemonCarButton name={name} />
    </div>
  );
};
