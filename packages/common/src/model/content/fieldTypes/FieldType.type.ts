import { FieldTypeBoolean } from "./FieldTypeBoolean.interface";
import { FieldTypeComplex } from "./FieldTypeComplex.interface";
import { FieldTypeNumber } from "./FieldTypeNumber.interface";
import { FieldTypeString } from "./FieldTypeString.interface";

export type FieldType =
    FieldTypeString |
    FieldTypeNumber |
    FieldTypeBoolean |
    FieldTypeComplex;