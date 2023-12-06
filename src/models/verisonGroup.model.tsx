import * as z from "zod";
import { SpecieBaseSchema } from "@models/specie.model";

export const VersionGroupDetailModelSchema = z.object({
  level_learned_at: z.number(),
  move_learn_method: SpecieBaseSchema,
  version_group: SpecieBaseSchema,
});
export type VersionGroupDetailModel = z.infer<
  typeof VersionGroupDetailModelSchema
>;
