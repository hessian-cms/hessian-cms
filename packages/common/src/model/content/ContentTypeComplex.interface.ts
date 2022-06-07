import { ContentTypeCommon } from "./ContentTypeCommon.interface";
import { FieldType } from "./fieldTypes";

export interface ContentTypeComplex extends ContentTypeCommon {
    type: "COMPLEX",
    definition: {[fielName:string]: FieldType}
}