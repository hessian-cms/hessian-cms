import { Asset } from "@hessian-cms/common"

export const isAsset = (obj: any): obj is Asset => {
    const { filename, mimetype, filesize } = obj;

    if(typeof filename !== "string") {
        // TODO: Regex check for filename
        return false;
    }

    if(typeof mimetype !== "string") {
        //TODO: Regex check for mimetype format check
        return false;
    }

    if(typeof filesize !== "number") {
        return false;
    }

    return true;
}