import { ContentTypeAsset } from "./ContentTypeAsset.interface";
import { ContentTypeComplex } from "./ContentTypeComplex.interface";

export type DiscriminatorContentType = "ASSET" | "COMPLEX";

export const CONTENT_TYPE_ASSET: DiscriminatorContentType = "ASSET";
export const CONTENT_TYPE_COMPLEX: DiscriminatorContentType = "COMPLEX";

export const CONTENT_TYPES:DiscriminatorContentType[] = [CONTENT_TYPE_COMPLEX, CONTENT_TYPE_ASSET]

export interface DiscriminatorContentTypeMapping {
    ASSET: ContentTypeAsset,
    COMPLEX: ContentTypeComplex
}