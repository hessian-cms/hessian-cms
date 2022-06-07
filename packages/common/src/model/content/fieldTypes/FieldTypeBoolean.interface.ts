import { FieldTypeCommon } from "./FieldTypeCommon.interface";

export interface FieldTypeBoolean extends FieldTypeCommon<boolean> { 
    type: "BOOLEAN"
}