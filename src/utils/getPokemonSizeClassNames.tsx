export interface getPokemonSizeClassNamesOptions {
  height: number;
}

export interface PokemonSize {
  isVeryLarge: boolean;
  isLarge: boolean;
  isMedium: boolean;
  isSmall: boolean;
  isVerySmall: boolean;
  coverElevation: string;
  coverSize: string;
}

export const getPokemonSizeClassNames = ({
  height,
}: getPokemonSizeClassNamesOptions): PokemonSize => {
  const isVeryLarge: boolean = height >= 15;
  const isLarge: boolean = height >= 12;
  const isMedium: boolean = height >= 9;
  const isSmall: boolean = height >= 5;
  const isVerySmall: boolean = height <= 4;

  let coverElevation: string = "-top-[20px]";
  let coverSize: string = "w-4/12";

  if (isVeryLarge) coverElevation = "-top-[70px]";
  else if (isLarge) coverElevation = "-top-[70px]";
  else if (isMedium) coverElevation = "-top-[65px]";
  else if (isSmall) coverElevation = "-top-[55px]";
  else if (isVerySmall) coverElevation = "-top-[40px]";

  if (isVeryLarge) coverSize = "w-10/12";
  else if (isLarge) coverSize = "w-9/12";
  else if (isMedium) coverSize = "w-8/12";
  else if (isSmall) coverSize = "w-5/12";
  else if (isVerySmall) coverSize = "w-4/12";

  return {
    isVeryLarge,
    isLarge,
    isMedium,
    isSmall,
    isVerySmall,
    coverElevation,
    coverSize,
  };
};
