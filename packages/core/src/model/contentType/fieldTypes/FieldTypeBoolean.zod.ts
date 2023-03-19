import { z } from "zod";
import { FieldTypeSchema, FIELD_TYPE_BOOLEAN } from "./FieldType.zod";

export const FieldTypeBooleanSchema = FieldTypeSchema.extend({
    type: z.literal(FIELD_TYPE_BOOLEAN),
})

export type FieldTypeBoolean = z.infer<typeof FieldTypeBooleanSchema>;