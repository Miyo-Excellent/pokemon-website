import * as z from "zod";
import { SpecieBaseSchema } from "@models/specie.model";

export const VersionGroupDetailModelSchema = z.object({
  level_learned_at: z.number().optional(),
  move_learn_method: SpecieBaseSchema.optional(),
  version_group: SpecieBaseSchema.optional(),
});
export type VersionGroupDetailModel = z.infer<
  typeof VersionGroupDetailModelSchema
>;
