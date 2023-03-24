import { z } from "zod";
import { FieldTypeArrayBaseSchema, FIELD_TYPE_ARRAY, getFieldTypeValidatorArray } from "./FieldTypeArray.zod";
import { FieldTypeBooleanSchema, FIELD_TYPE_BOOLEAN, getFieldTypeValidatorBoolean } from "./FieldTypeBoolean.zod";
import { FieldTypeNumberSchema, FIELD_TYPE_NUMBER, getFieldTypeValidatorNumber } from "./FieldTypeNumber.zod";
import { FieldTypeObjectSchema, FIELD_TYPE_OBJECT, getFieldTypeValidatorObject } from "./FieldTypeObject.zod";
import { FieldTypeStringSchema, FIELD_TYPE_STRING, getFieldTypeValidatorString } from "./FieldTypeString.zod";

export const FieldTypeSchema = z.union([
    FieldTypeArrayBaseSchema,
    FieldTypeBooleanSchema,
    FieldTypeNumberSchema,
    FieldTypeObjectSchema,
    FieldTypeStringSchema
]);

export type FieldType = z.infer<typeof FieldTypeSchema>;

var i=0;

export function getFieldTypeValidator(fieldType: unknown): z.ZodType {
    const schema = FieldTypeSchema.parse(fieldType);
    
    switch (schema.type) {
        case FIELD_TYPE_ARRAY:   return getFieldTypeValidatorArray(fieldType);
        case FIELD_TYPE_BOOLEAN: return getFieldTypeValidatorBoolean(fieldType);
        case FIELD_TYPE_NUMBER:  return getFieldTypeValidatorNumber(fieldType);
        case FIELD_TYPE_OBJECT:  return getFieldTypeValidatorObject(fieldType);
        case FIELD_TYPE_STRING:  return getFieldTypeValidatorString(fieldType);
        default: return z.any();
    }
}