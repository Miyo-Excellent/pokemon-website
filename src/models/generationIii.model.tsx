import * as z from "zod";
import { GoldModelSchema } from "@models/gold.model";
import { OfficialArtworkModelSchema } from "@models/officialArtwork.model";

export const GenerationIiiModelSchema = z.object({
  emerald: OfficialArtworkModelSchema.optional(),
  "firered-leafgreen": GoldModelSchema.optional(),
  "ruby-sapphire": GoldModelSchema.optional(),
});
export type GenerationIiiModel = z.infer<typeof GenerationIiiModelSchema>;
