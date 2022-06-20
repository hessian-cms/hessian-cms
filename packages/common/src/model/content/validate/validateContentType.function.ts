import { ContentType } from "../ContentType.type";
import { ContentTypeValidationError } from "./errors";
import { validateContentTypeAsset } from "./validateContentTypeAsset.function";
import { validateContentTypeComplex } from "./validateContentTypeComplex.function";

export const validateContentType = async (content: any, contentType: ContentType): Promise<any> => {
    switch (contentType.type) {
        case "COMPLEX": return await validateContentTypeComplex(content, contentType);
        case "ASSET": return await validateContentTypeAsset(content, contentType);
        default: throw new ContentTypeValidationError("Unkown ContentType");
    }
}