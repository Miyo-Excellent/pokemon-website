import * as z from "zod";

export const SpecieBaseSchema = z.object({
  name: z.string().optional(),
  url: z.string().optional(),
});
export type SpecieBase = z.infer<typeof SpecieBaseSchema>;
