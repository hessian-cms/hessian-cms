import { AssetUpload } from "@hessian-cms/common";
import { isAsset } from "./isAsset.function";

export const isAssetUpload = (obj: any): obj is AssetUpload => {
    const {location} = obj;

    if(typeof location !== "string") {
        return false;
    }

    // TODO: Check if FILE exists
    return isAsset(obj);
}