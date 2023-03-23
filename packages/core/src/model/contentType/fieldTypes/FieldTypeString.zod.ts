import { z } from "zod";

export const FIELD_TYPE_STRING = "STRING";

export const FieldTypeStringSchema = z.object({
    type: z.literal(FIELD_TYPE_STRING),
    min: z.number()
        .optional(),
    max: z.number()
        .optional(),
    regexp: z.string()
        .optional()
})

export type FieldTypeString = z.infer<typeof FieldTypeStringSchema>;