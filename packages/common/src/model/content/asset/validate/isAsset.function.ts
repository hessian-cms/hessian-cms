import { Asset } from "../Asset.interface";

/**
 * Validates unkown object to be Asset
 * 
 * @param obj 
 * @returns boolean
 */
export const isAsset = (obj: unknown): obj is Asset => {
    const { filename, mimetype, location } = obj as Asset;

    if (typeof filename !== "string") {
        // TODO: Regex check for filename
        return false;
    }

    if (typeof mimetype !== "string") {
        //TODO: Regex check for mimetype format check
        return false;
    }

    if (typeof location !== "string") {
        return false;
    }

    return true;
}