import * as z from "zod";

export const RedBlueModelSchema = z.object({
  back_default: z.string(),
  back_gray: z.string(),
  back_transparent: z.string(),
  front_default: z.string(),
  front_gray: z.string(),
  front_transparent: z.string(),
});
export type RedBlueModel = z.infer<typeof RedBlueModelSchema>;
