import * as z from "zod";

export const OfficialArtworkModelSchema = z.object({
  front_default: z.string(),
  front_shiny: z.string(),
});
export type OfficialArtworkModel = z.infer<typeof OfficialArtworkModelSchema>;
