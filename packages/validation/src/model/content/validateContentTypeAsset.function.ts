import { Asset, ContentTypeAsset } from "@hessian-cms/common";
import { AssetError, isAsset } from "./asset";
import { existsSync, statSync } from "fs";

export const validateContentTypeAsset = async (asset: any, contentType: ContentTypeAsset): Promise<Asset> => {
    if (!isAsset(asset)) {
        throw new AssetError("Given asset obj isn't of type Asset")
    }

    const { filename, location, mimetype } = asset;

    if (!existsSync(location)) {
        throw new AssetError("Asset doesn't exist at given location")
    }

    const filesize: number = statSync(location).size;

    if (contentType.filter) {
        const { filter } = contentType;
        if (filter.allowedFilenames) {
            if (!filter.allowedFilenames.includes(filename)) {
                throw new AssetError("Filename isn't in list of allowed");
            }
        }
        if (filter.allowedMimeTypes) {
            if (!filter.allowedMimeTypes.includes(mimetype)) {
                throw new AssetError("MimeType isn't in list of allowed");
            }
        }
        if (filter.regExpFilename) {
            if (!filter.regExpFilename.test(filename)) {
                throw new AssetError("RegExp for filename doesn't match");
            }
        }
        if (filter.regExpMimeType) {
            if (!filter.regExpMimeType.test(mimetype)) {
                throw new AssetError("RegExp for mimetype doesn't match");
            }
        }
        if (filter.sizeFrom) {
            if (filesize < filter.sizeFrom) {
                throw new AssetError("Filesize less then minimum");
            }
        }
        if (filter.sizeTo) {
            if (filter.sizeTo < filesize) {
                throw new AssetError("Filesize higher then maximum");
            }
        }
        try {
            if (filter.condition) {
                if (!await filter.condition(asset)) {
                    throw new AssetError("Asset doesn't match condition");
                }
            }
        } catch (e: any) {
            throw e;
        }
    }

    return asset;
}