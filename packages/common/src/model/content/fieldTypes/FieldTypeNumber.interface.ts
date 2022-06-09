import { FieldTypeCommon } from "./FieldTypeCommon.interface";

/**
 * Definition of number FieldType
 */
export interface FieldTypeNumber extends FieldTypeCommon<number> { 
    type: "NUMBER",
    from?: number,
    to?: number,
}