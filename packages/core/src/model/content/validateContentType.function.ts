import { ContentType } from "@hessian-cms/common";
import { ContentTypeValidationError } from "./errors";
import { validateContentTypeAsset } from "./validateContentTypeAsset.function";
import { validateContentTypeComplex } from "./validateContentTypeComplex.function";

export const validateContentType = async (content: any, contentType: ContentType): Promise<boolean> => {
    switch (contentType.type) {
        case "COMPLEX": return await validateContentTypeComplex(content, contentType); break;
        case "ASSET": return await validateContentTypeAsset(content, contentType); break;
        default: throw new ContentTypeValidationError("Unkown ContentType");
    }
}