import { z } from "zod";
import { FieldTypeSchema, FIELD_TYPE_TEXT } from "./FieldType.zod";

export const FieldTypeTextSchema = FieldTypeSchema.extend({
    type: z.literal(FIELD_TYPE_TEXT),
    regexp: z.string()
        .optional(),
    validate: z.function()
        .args(z.string())
        .returns(z.boolean())
        .optional()
})

export type FieldTypeText = z.infer<typeof FieldTypeTextSchema>;