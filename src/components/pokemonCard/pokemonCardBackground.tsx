import Image from "next/image";

export interface PokemonCardBackgroundProps {
  image: string;
}

export const PokemonCardBackground = ({
  image,
}: PokemonCardBackgroundProps) => {
  return (
    <div className="absolute flex items-center justify-center w-full h-full z-10 overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          alt="Pokeball background image"
          src={image}
          width={300}
          height={300}
          className="absolute flex inset-y-[15%] -inset-x-1/2 w-full scale-150 opacity-60"
        />
      </div>
    </div>
  );
};
