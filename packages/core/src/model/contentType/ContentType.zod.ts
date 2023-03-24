import { z } from "zod";
import { FieldTypeSchema } from "./fieldTypes/FieldType.zod";

export const ContentTypeSchema = z.object({
    maxEntries: z.number().optional(),
    definition: FieldTypeSchema
})

export type ContentType = z.infer<typeof ContentTypeSchema>;