import * as z from "zod";
import { GoldModelSchema } from "@models/gold.model";
import { CrystalModelSchema } from "@models/crystal.model";

export const GenerationIiModelSchema = z.object({
  crystal: CrystalModelSchema,
  gold: GoldModelSchema,
  silver: GoldModelSchema,
});
export type GenerationIiModel = z.infer<typeof GenerationIiModelSchema>;
