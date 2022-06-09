import { FieldTypeBoolean } from "./FieldTypeBoolean.interface";
import { FieldTypeComplex } from "./FieldTypeComplex.interface";
import { FieldTypeNumber } from "./FieldTypeNumber.interface";
import { FieldTypeString } from "./FieldTypeString.interface";

/**
 * Defines which FieldTypes are available
 */
export type FieldType =
    FieldTypeString |
    FieldTypeNumber |
    FieldTypeBoolean |
    FieldTypeComplex;