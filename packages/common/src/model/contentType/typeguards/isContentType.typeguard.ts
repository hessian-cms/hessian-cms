import { ContentType } from "../ContentType.type";
import { isContentTypeAsset } from "./isContentTypeAsset.typeguard";
import { isContentTypeComplex } from "./isContentTypeComplex.typeguard";

export const isContentType = (contentType: unknown): contentType is ContentType => {
    return isContentTypeAsset(contentType) || isContentTypeComplex(contentType);
}