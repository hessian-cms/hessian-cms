import { z } from "zod";

export const FIELD_TYPE_NUMBER = "NUMBER";

export const FieldTypeNumberSchema = z.object({
    type: z.literal(FIELD_TYPE_NUMBER),
    min: z.number().optional(),
    max: z.number().optional()
});

export type FieldTypeNumber = z.infer<typeof FieldTypeNumberSchema>