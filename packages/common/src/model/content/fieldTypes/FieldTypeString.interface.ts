import { FieldTypeCommon } from "./FieldTypeCommon.interface";

export interface FieldTypeString extends FieldTypeCommon<string> {
    type: "STRING",
    regExp?: RegExp
}