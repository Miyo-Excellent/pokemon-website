import * as z from "zod";
import { OtherModelSchema } from "@models/other.model";
import { VersionsModelSchema } from "@models/version.model";

// @ts-ignore
export const SpriteWithoutAnimatedModelSchema = z.object({
  back_default: z.string().optional(),
  back_female: z.string().optional(),
  back_shiny: z.string().optional(),
  back_shiny_female: z.string().optional(),
  front_default: z.string().optional(),
  front_female: z.string().optional(),
  front_shiny: z.string().optional(),
  front_shiny_female: z.string().optional(),
  other: OtherModelSchema.optional(),
  versions: VersionsModelSchema.optional(),
});
export type SpriteWithoutAnimatedModel = z.infer<
  typeof SpriteWithoutAnimatedModelSchema
>;

export const SpriteWithAnimatedModelSchema = z.object({
  animated: z.any().optional(),
});
export type SpriteWithAnimatedModel = z.infer<
  typeof SpriteWithAnimatedModelSchema
>;

// @ts-ignore
export const SpriteModelSchema = SpriteWithoutAnimatedModelSchema.merge(
  SpriteWithAnimatedModelSchema,
);
export type SpriteModel = z.infer<typeof SpriteModelSchema>;
