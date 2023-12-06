import * as z from "zod";
import { SpecieBaseSchema } from "@models/specie.model";
import { VersionGroupDetailModelSchema } from "@models/verisonGroup.model";

export const MoveModelSchema = z.object({
  move: SpecieBaseSchema,
  version_group_details: z.array(VersionGroupDetailModelSchema),
});
export type MoveModel = z.infer<typeof MoveModelSchema>;
