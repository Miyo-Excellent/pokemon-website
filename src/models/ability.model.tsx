import * as z from "zod";
import { SpecieBaseSchema } from "@models/specie.model";

export const AbilityModelSchema = z.object({
  ability: SpecieBaseSchema.optional(),
  is_hidden: z.boolean().optional(),
  slot: z.number().optional(),
});
export type AbilityModel = z.infer<typeof AbilityModelSchema>;
