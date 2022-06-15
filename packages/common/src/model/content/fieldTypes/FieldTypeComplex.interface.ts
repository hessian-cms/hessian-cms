import { DiscriminatorFieldType } from "./DiscriminatorFieldType.enum";
import { FieldType } from "./FieldType.type";
import { FieldTypeCommon } from "./FieldTypeCommon.interface";

/**
 * Definition of complex FieldType
 */
export interface FieldTypeComplex<T = any> extends FieldTypeCommon<T> { 
    type: DiscriminatorFieldType.COMPLEX,
    definition: {[field:string]: FieldType}
}