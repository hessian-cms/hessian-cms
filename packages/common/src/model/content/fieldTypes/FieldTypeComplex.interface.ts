import { DiscriminatorFieldType } from "./DiscriminatorFieldType.enum";
import { FieldsDefinition } from "./FieldsDefinition.interface";
import { FieldTypeCommon } from "./FieldTypeCommon.interface";

/**
 * Definition of complex FieldType
 */
export interface FieldTypeComplex<T = any> extends FieldTypeCommon<T> { 
    type: DiscriminatorFieldType.COMPLEX,
    definition: FieldsDefinition
}