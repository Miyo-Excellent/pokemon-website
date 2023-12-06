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
  "generation-i": GenerationIModelSchema,
  "generation-ii": GenerationIiiModelSchema,
  "generation-iii": GenerationIiiModelSchema,
  "generation-iv": GenerationIvModelSchema,
  "generation-v": GenerationVModelSchema,
  "generation-vi": z.record(z.string(), HomeModelSchema),
  "generation-vii": GenerationViiModelSchema,
  "generation-viii": GenerationViiiModelSchema,
});
export type VersionsModel = z.infer<typeof VersionsModelSchema>;
