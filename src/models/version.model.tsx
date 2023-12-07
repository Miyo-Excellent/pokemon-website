import * as z from "zod";
import { GenerationIModelSchema } from "@models/generationI.model";
import { GenerationIiiModelSchema } from "@models/generationIii.model";
import { GenerationIvModelSchema } from "@models/generationIv.model";
import { GenerationVModelSchema } from "@models/generationV.model";
import { HomeModelSchema } from "@models/home.model";
import { GenerationViiModelSchema } from "@models/generationVii.model";
import { GenerationViiiModelSchema } from "@models/generationViii.model";

// @ts-ignore
export const VersionsModelSchema = z.object({
  "generation-i": GenerationIModelSchema.optional(),
  "generation-ii": GenerationIiiModelSchema.optional(),
  "generation-iii": GenerationIiiModelSchema.optional(),
  "generation-iv": GenerationIvModelSchema.optional(),
  "generation-v": GenerationVModelSchema.optional(),
  "generation-vi": z.record(z.string(), HomeModelSchema).optional(),
  "generation-vii": GenerationViiModelSchema.optional(),
  "generation-viii": GenerationViiiModelSchema.optional(),
});
export type VersionsModel = z.infer<typeof VersionsModelSchema>;
