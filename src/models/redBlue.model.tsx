import * as z from "zod";

export const RedBlueModelSchema = z.object({
  back_default: z.string().optional(),
  back_gray: z.string().optional(),
  back_transparent: z.string().optional(),
  front_default: z.string().optional(),
  front_gray: z.string().optional(),
  front_transparent: z.string().optional(),
});
export type RedBlueModel = z.infer<typeof RedBlueModelSchema>;
