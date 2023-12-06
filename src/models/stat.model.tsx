import * as z from "zod";
import { SpecieBaseSchema } from "@models/specie.model";

export const StatModelSchema = z.object({
  base_stat: z.number(),
  effort: z.number(),
  stat: SpecieBaseSchema,
});
export type StatModel = z.infer<typeof StatModelSchema>;
