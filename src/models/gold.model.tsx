import * as z from "zod";

export const GoldModelSchema = z.object({
  back_default: z.string().optional(),
  back_shiny: z.string().optional(),
  front_default: z.string().optional(),
  front_shiny: z.string().optional(),
  front_transparent: z.string().optional(),
});
export type GoldModel = z.infer<typeof GoldModelSchema>;
