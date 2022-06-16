import { FieldTypeBoolean } from "./FieldTypeBoolean.interface";
import { FieldTypeComplex } from "./FieldTypeComplex.interface";
import { FieldTypeNumber } from "./FieldTypeNumber.interface";
import { FieldTypeString } from "./FieldTypeString.interface";

/**
 * To be used in keyof features of DiscriminatorFieldType
 */
export interface DiscriminatorFieldTypeMapping {
    STRING: FieldTypeString,
    BOOLEAN: FieldTypeBoolean,
    NUMBER: FieldTypeNumber,
    COMPLEX: FieldTypeComplex
}