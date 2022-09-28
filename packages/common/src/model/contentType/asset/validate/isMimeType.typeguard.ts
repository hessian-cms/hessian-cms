import { MimeType } from "../MimeType.type";

export const MIME_TYPE_REGEXP = /[a-zA-Z(-)]+\/[a-zA-Z(-)]+/;

export const isMimeType = (type: unknown): type is MimeType => {
    if(typeof type !== "string") {
        return false;
    }

    return MIME_TYPE_REGEXP.test(type as string);
}