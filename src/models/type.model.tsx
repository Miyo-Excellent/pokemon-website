import * as z from "zod";
import { SpecieBaseSchema } from "@models/specie.model";

export const TypeModelSchema = z.object({
  slot: z.number(),
  type: SpecieBaseSchema,
});
export type TypeModel = z.infer<typeof TypeModelSchema>;
