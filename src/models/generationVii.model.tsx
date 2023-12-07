import * as z from "zod";
import { DreamWorldModelSchema } from "@models/dreamWorld.model";
import { HomeModelSchema } from "@models/home.model";

export const GenerationViiModelSchema = z.object({
  icons: DreamWorldModelSchema.optional(),
  "ultra-sun-ultra-moon": HomeModelSchema.optional(),
});
export type GenerationViiModel = z.infer<typeof GenerationViiModelSchema>;
