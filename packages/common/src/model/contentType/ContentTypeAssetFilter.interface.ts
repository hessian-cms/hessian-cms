import { Asset } from "./asset"

/**
 * Providing filter information for new `Assets`
 */
export interface ContentTypeAssetFilter {
    /**
     * If set mime-type of new `Asset` must match given `RegExp`
     */
    regExpMimeType?: RegExp,
    /**
     * If set mime-type of new `Asset` must be included
     */
    allowedMimeTypes?: string[],
    /**
     * If set filename of new `Asset` must match given `RegExp`
     */
    regExpFilename?: RegExp,
    /**
     * If set filename of new `Asset` must be included
     */
    allowedFilenames?: string,
    /**
     * If set filesize of new `Asset` must be equal or bigger
     */
    sizeFrom?: number,
    /**
     * If set filesize of new `Asset` must be equal or smaller
     */
    sizeTo?: number
    /**
     * If set condition must match
     * @param asset - `Asset` condition is checked on
     */
    condition?: (asset: Asset)=>Promise<boolean>
}