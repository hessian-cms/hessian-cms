import { z } from "zod";

export const FIELD_TYPE_NUMBER = "NUMBER";

export const FieldTypeNumberSchema = z.object({
    type: z.literal(FIELD_TYPE_NUMBER),
    min: z.number().optional(),
    max: z.number().optional()
});

export type FieldTypeNumber = z.infer<typeof FieldTypeNumberSchema>;

export function getFieldTypeValidatorNumber(fieldTypeNumber: unknown): z.ZodType {
    const schema = FieldTypeNumberSchema.parse(fieldTypeNumber);
    let validator = z.number();
    if (schema.min !== undefined) {
        validator = validator.min(schema.min)
    }
    if (schema.max !== undefined) {
        validator = validator.max(schema.max)
    }
    return validator;
}