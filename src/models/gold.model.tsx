import * as z from "zod";

export const GoldModelSchema = z.object({
  back_default: z.string(),
  back_shiny: z.string(),
  front_default: z.string(),
  front_shiny: z.string(),
  front_transparent: z.string().optional(),
});
export type GoldModel = z.infer<typeof GoldModelSchema>;
