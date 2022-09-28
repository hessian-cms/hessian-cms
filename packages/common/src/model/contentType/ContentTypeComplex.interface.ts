import { ContentTypeCommon } from "./ContentTypeCommon.interface";
import { DiscriminatorContentType } from "./DiscriminatorContentType.enum";
import { FieldsDefinition } from "./fieldTypes/FieldsDefinition.interface";

/**
 * Definition of COMPLEX content type
 */
export interface ContentTypeComplex extends ContentTypeCommon {
    /**
     * Discriminator
     */
    type: DiscriminatorContentType.COMPLEX,
    /**
     * Definition for complex content type
     */
    definition: FieldsDefinition
}