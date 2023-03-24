import { z } from "zod";
import { getFieldTypeValidator } from "./FieldType.zod";
import { FieldTypeArray, FieldTypeArraySchema } from "./FieldTypeArray.zod";
import { FieldTypeBoolean, FieldTypeBooleanSchema } from "./FieldTypeBoolean.zod";
import { FieldTypeNumber, FieldTypeNumberSchema } from "./FieldTypeNumber.zod";
import { FieldTypeString, FieldTypeStringSchema } from "./FieldTypeString.zod";

export const FIELD_TYPE_OBJECT = "OBJECT";

export const FieldTypeObjectBaseSchema = z.object({
    type: z.literal(FIELD_TYPE_OBJECT),
})

export type FieldTypeObject = z.infer<typeof FieldTypeObjectBaseSchema> & {
    definition: {
        [field: string]: FieldTypeObject
        | FieldTypeBoolean
        | FieldTypeNumber
        | FieldTypeString
        | FieldTypeArray
    }
};

export const FieldTypeObjectSchema: z.ZodType<FieldTypeObject> = FieldTypeObjectBaseSchema.extend({
    definition: z.lazy(() => z.record(z.union([
        FieldTypeObjectSchema,
        FieldTypeBooleanSchema,
        FieldTypeNumberSchema,
        FieldTypeStringSchema,
        FieldTypeArraySchema
    ])))
})

export function getFieldTypeValidatorObject(fieldTypeObject: unknown): z.ZodType {
    const schema = FieldTypeObjectSchema.parse(fieldTypeObject);
    let validator = z.object({});
    Object.keys(schema.definition).forEach((key: string) => {
        validator = validator.extend({
            [key]: getFieldTypeValidator(schema.definition[key])
        })
    });
    return validator;
}