import * as z from "zod";
import { SpecieBaseSchema } from "@models/specie.model";

export const StatModelSchema = z.object({
  base_stat: z.number().optional(),
  effort: z.number().optional(),
  stat: SpecieBaseSchema.optional(),
});
export type StatModel = z.infer<typeof StatModelSchema>;
