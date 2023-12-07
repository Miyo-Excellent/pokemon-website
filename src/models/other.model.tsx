import * as z from "zod";
import { DreamWorldModelSchema } from "@models/dreamWorld.model";
import { HomeModelSchema } from "@models/home.model";
import { OfficialArtworkModelSchema } from "@models/officialArtwork.model";

export const OtherModelSchema = z.object({
  dream_world: DreamWorldModelSchema.optional(),
  home: HomeModelSchema.optional(),
  "official-artwork": OfficialArtworkModelSchema.optional(),
});
export type OtherModel = z.infer<typeof OtherModelSchema>;
