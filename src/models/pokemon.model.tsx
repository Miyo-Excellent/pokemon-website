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
  abilities: z.array(AbilityModelSchema),
  base_experience: z.number(),
  forms: z.array(SpecieBaseSchema),
  game_indices: z.array(GameIndexModelSchema),
  height: z.number(),
  held_items: z.array(z.any()),
  id: z.number(),
  is_default: z.boolean(),
  location_area_encounters: z.string(),
  moves: z.array(MoveModelSchema),
  name: z.string(),
  order: z.number(),
  past_abilities: z.array(z.any()),
  past_types: z.array(z.any()),
  species: SpecieBaseSchema,
  sprites: SpriteModelSchema,
  stats: z.array(StatModelSchema),
  types: z.array(TypeModelSchema),
  weight: z.number(),
});
export type PokemonModel = z.infer<typeof PokemonModelSchema>;
