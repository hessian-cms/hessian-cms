import { FieldTypeCommon } from "./FieldTypeCommon.interface";

export interface FieldTypeNumber extends FieldTypeCommon<number> { 
    type: "NUMBER",
    from?: number,
    to?: number,
}