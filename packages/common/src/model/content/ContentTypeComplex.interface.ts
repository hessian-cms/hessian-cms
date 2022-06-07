import { ContentTypeCommon } from "./ContentTypeCommon.interface";
import { FieldType } from "./fieldTypes";

export interface ContentTypeComplex<T> extends ContentTypeCommon<T> {
    type: "COMPLEX",
    definition: {[fielName:string]: FieldType}
}