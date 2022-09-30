import { optionalTypeOf } from "../../helper";
import { ContentType } from "../ContentType.type";
import { DiscriminatorContentType } from "../DiscriminatorContentType.enum";

export const isContentTypeCommon = (contentType: unknown): contentType is ContentType => {
    const { type, displayName, id } = contentType as ContentType;
    if (!(type === DiscriminatorContentType.ASSET || type === DiscriminatorContentType.COMPLEX)) {
        return false;
    }
    if (!optionalTypeOf(displayName, "string")) {
        return false;
    }
    if (!optionalTypeOf(id, "string")) {
        return false;
    }
    return true;
}