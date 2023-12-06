import * as z from "zod";

export const SpecieBaseSchema = z.object({
  name: z.string(),
  url: z.string(),
});
export type SpecieBase = z.infer<typeof SpecieBaseSchema>;
