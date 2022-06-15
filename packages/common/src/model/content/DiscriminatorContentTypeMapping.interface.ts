import { ContentTypeAsset } from "./ContentTypeAsset.interface";
import { ContentTypeComplex } from "./ContentTypeComplex.interface";

/**
 * To be used in keyof features of DiscriminatorContentType
 */
export interface DiscriminatorContentTypeMapping {
    ASSET: ContentTypeAsset,
    COMPLEX: ContentTypeComplex
}