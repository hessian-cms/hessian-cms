import { ContentTypeAssetFilter } from "./ContentTypeAssetFilter.interface";
import { ContentTypeCommon } from "./ContentTypeCommon.interface";
import { DiscriminatorContentType } from "./DiscriminatorContentType.enum";

/**
 * Definition of ASSET content type
 */
export interface ContentTypeAsset extends ContentTypeCommon {
    /**
     * Discriminator
     */
    type: DiscriminatorContentType.ASSET,
    /**
     * Filter informations for `Asset`
     */
    filter?: ContentTypeAssetFilter
}