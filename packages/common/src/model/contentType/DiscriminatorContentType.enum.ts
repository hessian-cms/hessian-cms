/**
 * Enum of available discriminators for `ContentType`
 */
export enum DiscriminatorContentType {
    /**
     * Discriminator for `ContentTypeAsset`
     */
    ASSET="ASSET",
    /**
     * Discriminator for `ContentTypeComplex`
     */
    COMPLEX="COMPLEX"
}

/**
 * Array including all available discriminators for `ContentType`
 */
export const CONTENT_TYPES:DiscriminatorContentType[] = [
    DiscriminatorContentType.ASSET, 
    DiscriminatorContentType.COMPLEX
]