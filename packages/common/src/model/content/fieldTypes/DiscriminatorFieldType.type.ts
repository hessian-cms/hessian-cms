import { FieldTypeBoolean } from "./FieldTypeBoolean.interface";
import { FieldTypeComplex } from "./FieldTypeComplex.interface";
import { FieldTypeNumber } from "./FieldTypeNumber.interface";
import { FieldTypeString } from "./FieldTypeString.interface";

/**
 * Discriminator for type of field
 */
export type DiscriminatorFieldType = "STRING" | "BOOLEAN" | "NUMBER" | "COMPLEX"

export const FIELD_TYPE_STRING:DiscriminatorFieldType  = "STRING";
export const FIELD_TYPE_BOOLEAN:DiscriminatorFieldType = "BOOLEAN";
export const FIELD_TYPE_NUMBER:DiscriminatorFieldType  = "NUMBER";
export const FIELD_TYPE_COMPLEX:DiscriminatorFieldType = "COMPLEX";

export const FIELD_TYPES:DiscriminatorFieldType[] = [FIELD_TYPE_STRING, FIELD_TYPE_BOOLEAN, FIELD_TYPE_NUMBER, FIELD_TYPE_COMPLEX]

/**
 * To be used in keyof features of DiscriminatorFieldType
 */
export interface DiscriminatorFieldTypeMapping {
    STRING: FieldTypeString,
    BOOLEAN: FieldTypeBoolean,
    NUMBER: FieldTypeNumber,
    COMPLEX: FieldTypeComplex
}