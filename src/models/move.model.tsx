import * as z from "zod";
import { SpecieBaseSchema } from "@models/specie.model";
import { VersionGroupDetailModelSchema } from "@models/verisonGroup.model";

export const MoveModelSchema = z.object({
  move: SpecieBaseSchema.optional(),
  version_group_details: z.array(VersionGroupDetailModelSchema).optional(),
});
export type MoveModel = z.infer<typeof MoveModelSchema>;
