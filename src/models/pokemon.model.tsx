import * as z from "zod";
import { AbilityModelSchema } from "@models/ability.model";
import { SpecieBaseSchema } from "@models/specie.model";
import { GameIndexModelSchema } from "@models/gameIndex.model";
import { MoveModelSchema } from "@models/move.model";
import { SpriteModelSchema } from "@models/sprite.model";
import { StatModelSchema } from "@models/stat.model";
import { TypeModelSchema } from "@models/type.model";

export interface PokemonBase {
  url: string;
  name: string;
}

export const PokemonModelSchema = z.object({
  active: z.boolean().optional().default(false),
  abilities: z.array(AbilityModelSchema).optional(),
  base_experience: z.number().optional(),
  forms: z.array(SpecieBaseSchema).optional(),
  game_indices: z.array(GameIndexModelSchema).optional(),
  height: z.number().optional(),
  held_items: z.array(z.any()).optional(),
  id: z.number().optional(),
  is_default: z.boolean().optional(),
  location_area_encounters: z.string().optional(),
  moves: z.array(MoveModelSchema).optional(),
  name: z.string().optional(),
  order: z.number().optional(),
  past_abilities: z.array(z.any()).optional(),
  past_types: z.array(z.any()).optional(),
  species: SpecieBaseSchema.optional(),
  sprites: SpriteModelSchema.optional(),
  stats: z.array(StatModelSchema).optional(),
  types: z.array(TypeModelSchema).optional(),
  weight: z.number().optional(),
});
export type PokemonModel = z.infer<typeof PokemonModelSchema>;
