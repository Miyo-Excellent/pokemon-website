import * as z from "zod";
import { DreamWorldModelSchema } from "@models/dreamWorld.model";

export const GenerationViiiModelSchema = z.object({
  icons: DreamWorldModelSchema.optional(),
});
export type GenerationViiiModel = z.infer<typeof GenerationViiiModelSchema>;
