import * as z from "zod";
import { AbilityModelSchema } from "@models/ability.model";

export const CrystalModelSchema = z.object({
  back_default: z.string().optional(),
  back_shiny: z.string().optional(),
  back_shiny_transparent: z.string().optional(),
  back_transparent: z.string().optional(),
  front_default: z.string().optional(),
  front_shiny: z.string().optional(),
  front_shiny_transparent: z.string().optional(),
  front_transparent: z.string().optional(),
});
export type Crystal = z.infer<typeof CrystalModelSchema>;
