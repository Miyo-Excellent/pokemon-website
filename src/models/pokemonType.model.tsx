import * as z from "zod";

export const PokemonTypeSchema = z.object({
  name: z.string(),
  url: z.string(),
});

export type PokemonType = z.infer<typeof PokemonTypeSchema>;

export const PokemonTypeModelSchema = z.object({
  name: z.string(),
  url: z.string(),
  icon: z.any(),
  color: z.string(),
});

export type PokemonTypeModel = z.infer<typeof PokemonTypeModelSchema>;
