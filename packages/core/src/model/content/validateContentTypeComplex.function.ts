import { ContentTypeComplex } from "@hessian-cms/common";
import { validateFieldType } from "./fieldTypes";

export const validateContentTypeComplex = async (content: any, contentType: ContentTypeComplex):Promise<boolean> => {
    if (typeof content !== 'object') {
        return false;
    }

    const keys: string[] = Object.keys(contentType.definition);

    for (let key of keys) {
        if (!await validateFieldType(content[key], contentType.definition[key])) {
            return false;
        }
    }

    return true;
}