import { Asset } from "./asset";
import { ContentTypeCommon } from "./ContentTypeCommon.interface";
import { DiscriminatorContentType } from "./DiscriminatorContentType.enum";

/**
 * Definition of ASSET content type
 */
export interface ContentTypeAsset extends ContentTypeCommon {
    type: DiscriminatorContentType.ASSET,
    filter?: {
        regExpMimeType?: RegExp,
        allowedMimeTypes?: string[],
        regExpFilename?: RegExp,
        allowedFilenames?: string,
        sizeFrom?: number,
        sizeTo?: number
        condition?: (asset: Asset)=>Promise<boolean>
    }
}