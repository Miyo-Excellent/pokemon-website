import * as z from "zod";

export const OfficialArtworkModelSchema = z.object({
  front_default: z.string().optional(),
  front_shiny: z.string().optional(),
});
export type OfficialArtworkModel = z.infer<typeof OfficialArtworkModelSchema>;
