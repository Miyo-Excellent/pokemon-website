import * as z from "zod";
import { AbilityModelSchema } from "@models/ability.model";

export const DreamWorldModelSchema = z.object({
  front_default: z.string().optional(),
  front_female: z.string().optional(),
});
export type DreamWorldModel = z.infer<typeof DreamWorldModelSchema>;
