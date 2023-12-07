import * as z from "zod";
import { SpriteModelSchema } from "@models/sprite.model";

// @ts-ignore
export const GenerationIvModelSchema = z.object({
  "diamond-pearl": SpriteModelSchema.optional(),
  "heartgold-soulsilver": SpriteModelSchema.optional(),
  platinum: SpriteModelSchema.optional(),
});
export type GenerationIvModel = z.infer<typeof GenerationIvModelSchema>;
