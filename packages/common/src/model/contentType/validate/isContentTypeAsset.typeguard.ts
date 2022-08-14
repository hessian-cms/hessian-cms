import { ContentTypeAsset } from "../ContentTypeAsset.interface";
import { DiscriminatorContentType } from "../DiscriminatorContentType.enum";
import { isContentTypeCommon } from "./isContentTypeCommon.typeguard";
import { isContentTypeAssetFilter } from "./isContentTypeAssetFilter.typeguard";

export const isContentTypeAsset = (contentType: unknown): contentType is ContentTypeAsset => {
    const { type, filter } = contentType as ContentTypeAsset;
    
    if(!isContentTypeCommon(contentType)) {
        return false;
    }

    if (type !== DiscriminatorContentType.ASSET) {
        console.log("type", type !== DiscriminatorContentType.ASSET)
        return false;
    }

    if (filter) {
        if(!isContentTypeAssetFilter(filter)) {
            return false;
        }
    }

    return true;
}