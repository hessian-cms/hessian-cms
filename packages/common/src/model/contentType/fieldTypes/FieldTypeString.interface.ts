import { DiscriminatorFieldType } from "./DiscriminatorFieldType.enum";
import { FieldTypeCommon } from "./FieldTypeCommon.interface";

/**
 * Definition of string FieldType
 */
export interface FieldTypeString extends FieldTypeCommon<string> {
    type: DiscriminatorFieldType.STRING,
    regExp?: RegExp
}