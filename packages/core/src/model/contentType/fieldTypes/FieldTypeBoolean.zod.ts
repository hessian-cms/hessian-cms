import { z } from "zod";

export const FIELD_TYPE_BOOLEAN = "BOOLEAN";

export const FieldTypeBooleanSchema = z.object({
    type: z.literal(FIELD_TYPE_BOOLEAN),
})

export type FieldTypeBoolean = z.infer<typeof FieldTypeBooleanSchema>;