import * as z from "zod";
import { SpecieBaseSchema } from "@models/specie.model";

export const AbilityModelSchema = z.object({
  ability: SpecieBaseSchema,
  is_hidden: z.boolean(),
  slot: z.number(),
});
export type AbilityModel = z.infer<typeof AbilityModelSchema>;
