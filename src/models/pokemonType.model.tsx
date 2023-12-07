import * as z from "zod";

export const PokemonTypeSchema = z.object({
  name: z.string(),
  url: z.string(),
});

export type PokemonType = z.infer<typeof PokemonTypeSchema>;

export const PokemonTypeModelSchema = z.object({
  name: z.string().optional(),
  url: z.string().optional(),
  icon: z.any().optional(),
  color: z.string().optional(),
});

export type PokemonTypeModel = z.infer<typeof PokemonTypeModelSchema>;
