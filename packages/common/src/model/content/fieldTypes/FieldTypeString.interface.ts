import { FieldTypeCommon } from "./FieldTypeCommon.interface";

/**
 * Definition of string FieldType
 */
export interface FieldTypeString extends FieldTypeCommon<string> {
    type: "STRING",
    regExp?: RegExp
}