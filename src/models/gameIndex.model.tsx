import * as z from "zod";
import { SpecieBaseSchema } from "@models/specie.model";

export const GameIndexModelSchema = z.object({
  game_index: z.number(),
  version: SpecieBaseSchema,
});
export type GameIndexModel = z.infer<typeof GameIndexModelSchema>;
