import { ContentTypeComplex } from "../ContentTypeComplex.interface";
import { DiscriminatorContentType } from "../DiscriminatorContentType.enum";
import { isFieldsDefinition } from "../fieldTypes";
import { isContentTypeCommon } from "./isContentTypeCommon.typeguard";

export const isContentTypeComplex = (contentType: unknown): contentType is ContentTypeComplex => {
    const { type, definition } = contentType as ContentTypeComplex;

    if(!isContentTypeCommon(contentType)) {
        return false;
    }

    if (type !== DiscriminatorContentType.COMPLEX) {
        return false;
    }

    return isFieldsDefinition(definition);
}