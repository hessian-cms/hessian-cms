import { ContentType } from "../ContentType.type";
import { ContentTypeValidationError } from "./errors";
import { validateContentTypeAsset } from "./validateContentTypeAsset.function";
import { validateContentTypeComplex } from "./validateContentTypeComplex.function";

/**
 * Validates if content is matching contentType
 * 
 * @param content - object to be validated
 * @param contentType - ContentType to use for validation
 * @returns Promise<unkown>
 */
export const validateContentType = async (content: unknown, contentType: ContentType): Promise<unknown> => {
    switch (contentType.type) {
        case "COMPLEX": return await validateContentTypeComplex(content, contentType);
        case "ASSET": return await validateContentTypeAsset(content, contentType);
        default: throw new ContentTypeValidationError("Unkown ContentType");
    }
}