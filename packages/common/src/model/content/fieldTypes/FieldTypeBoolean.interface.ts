import { DiscriminatorFieldType } from "./DiscriminatorFieldType.enum";
import { FieldTypeCommon } from "./FieldTypeCommon.interface";

/**
 * FieldType definition for boolean
 */
export interface FieldTypeBoolean extends FieldTypeCommon<boolean> { 
    type: DiscriminatorFieldType.BOOLEAN
}