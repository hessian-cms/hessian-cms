import { ContentTypeCommon } from "./ContentTypeCommon.interface";
import { DiscriminatorContentType } from "./DiscriminatorContentType.enum";

/**
 * Definition of ASSET content type
 */
export interface ContentTypeAsset extends ContentTypeCommon {
    type: DiscriminatorContentType.ASSET,
}