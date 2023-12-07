import * as z from "zod";
import { SpecieBaseSchema } from "@models/specie.model";

export const TypeModelSchema = z.object({
  slot: z.number().optional(),
  type: SpecieBaseSchema.optional(),
});
export type TypeModel = z.infer<typeof TypeModelSchema>;
