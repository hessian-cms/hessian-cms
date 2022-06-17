import { Asset } from "@hessian-cms/common"

export const isAsset = (obj: any): obj is Asset => {
    const { filename, mimetype, location } = obj;

    if(typeof filename !== "string") {
        // TODO: Regex check for filename
        return false;
    }

    if(typeof mimetype !== "string") {
        //TODO: Regex check for mimetype format check
        return false;
    }

    if(typeof location !== "string") {
        return false;
    }

    return true;
}