import * as z from "zod";

export const HomeModelSchema = z.object({
  front_default: z.string().optional(),
  front_female: z.string().optional(),
  front_shiny: z.string().optional(),
  front_shiny_female: z.string().optional(),
});
export type HomeModel = z.infer<typeof HomeModelSchema>;
