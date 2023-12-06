import * as z from "zod";
import { AbilityModelSchema } from "@models/ability.model";

export const CrystalModelSchema = z.object({
  back_default: z.string(),
  back_shiny: z.string(),
  back_shiny_transparent: z.string(),
  back_transparent: z.string(),
  front_default: z.string(),
  front_shiny: z.string(),
  front_shiny_transparent: z.string(),
  front_transparent: z.string(),
});
export type Crystal = z.infer<typeof CrystalModelSchema>;
