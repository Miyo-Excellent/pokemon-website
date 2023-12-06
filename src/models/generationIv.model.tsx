import * as z from "zod";
import { SpriteModelSchema } from "@models/sprite.model";

// @ts-ignore
export const GenerationIvModelSchema = z.object({
  "diamond-pearl": SpriteModelSchema,
  "heartgold-soulsilver": SpriteModelSchema,
  platinum: SpriteModelSchema,
});
export type GenerationIvModel = z.infer<typeof GenerationIvModelSchema>;
