import { DiscriminatorFieldType } from "./DiscriminatorFieldType.enum";
import { FieldsDefinition } from "./FieldsDefinition.interface";
import { FieldTypeCommon } from "./FieldTypeCommon.interface";

/**
 * Definition of complex FieldType
 */
export interface FieldTypeComplex<T = Record<string, unknown>> extends FieldTypeCommon<T> { 
    type: DiscriminatorFieldType.COMPLEX,
    definition: FieldsDefinition
}