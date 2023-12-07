import * as z from "zod";
import { RedBlueModelSchema } from "@models/redBlue.model";

export const GenerationIModelSchema = z.object({
  "red-blue": RedBlueModelSchema.optional(),
  yellow: RedBlueModelSchema.optional(),
});
export type GenerationIModel = z.infer<typeof GenerationIModelSchema>;
