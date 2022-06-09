import { ContentTypeCommon } from "./ContentTypeCommon.interface";
import { FieldsDefinition } from "./fieldTypes/FieldsDefinition.interface";

/**
 * Definition of COMPLEX content type
 */
export interface ContentTypeComplex extends ContentTypeCommon {
    type: "COMPLEX",
    definition: FieldsDefinition
}