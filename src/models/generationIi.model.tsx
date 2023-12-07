import * as z from "zod";
import { GoldModelSchema } from "@models/gold.model";
import { CrystalModelSchema } from "@models/crystal.model";

export const GenerationIiModelSchema = z.object({
  crystal: CrystalModelSchema.optional(),
  gold: GoldModelSchema.optional(),
  silver: GoldModelSchema.optional(),
});
export type GenerationIiModel = z.infer<typeof GenerationIiModelSchema>;
