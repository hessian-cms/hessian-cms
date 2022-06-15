import { DiscriminatorFieldType } from "./DiscriminatorFieldType.enum";
import { FieldTypeCommon } from "./FieldTypeCommon.interface";

/**
 * Definition of number FieldType
 */
export interface FieldTypeNumber extends FieldTypeCommon<number> { 
    type: DiscriminatorFieldType.NUMBER,
    from?: number,
    to?: number,
}