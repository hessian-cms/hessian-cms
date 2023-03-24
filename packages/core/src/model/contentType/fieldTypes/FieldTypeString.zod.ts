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

export function getFieldTypeValidatorString(fieldTypeString: unknown): z.ZodType {
    const schema = FieldTypeStringSchema.parse(fieldTypeString);
    let validator = z.string();
    if (schema.min !== undefined) {
        validator = validator.min(schema.min)
    }
    if (schema.max !== undefined) {
        validator = validator.max(schema.max)
    }
    if(schema.regexp !== undefined) {
        validator = validator.regex(new RegExp(schema.regexp))
    }
    return validator;
}