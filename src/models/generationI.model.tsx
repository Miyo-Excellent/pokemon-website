import * as z from "zod";
import { RedBlueModelSchema } from "@models/redBlue.model";

export const GenerationIModelSchema = z.object({
  "red-blue": RedBlueModelSchema,
  yellow: RedBlueModelSchema,
});
export type GenerationIModel = z.infer<typeof GenerationIModelSchema>;
