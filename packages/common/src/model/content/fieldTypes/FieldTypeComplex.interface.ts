import { FieldType } from "./FieldType.type";
import { FieldTypeCommon } from "./FieldTypeCommon.interface";

export interface FieldTypeComplex<T = any> extends FieldTypeCommon<T> { 
    type: "COMPLEX",
    definition: {[field:string]: FieldType}
}