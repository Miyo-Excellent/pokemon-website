import * as z from "zod";
import { GoldModelSchema } from "@models/gold.model";
import { OfficialArtworkModelSchema } from "@models/officialArtwork.model";

export const GenerationIiiModelSchema = z.object({
  emerald: OfficialArtworkModelSchema,
  "firered-leafgreen": GoldModelSchema,
  "ruby-sapphire": GoldModelSchema,
});
export type GenerationIiiModel = z.infer<typeof GenerationIiiModelSchema>;
