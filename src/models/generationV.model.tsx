import * as z from "zod";
import { SpriteModelSchema } from "@models/sprite.model";

// @ts-ignore
export const GenerationVModelSchema = z.object({
  "black-white": SpriteModelSchema,
});
export type GenerationVModel = z.infer<typeof GenerationVModelSchema>;
