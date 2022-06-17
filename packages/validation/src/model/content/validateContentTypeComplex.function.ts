import { ContentTypeComplex } from "@hessian-cms/common";
import { ContentTypeValidationErrorComplex } from "./errors";
import { FieldTypeValidationError, validateFieldType } from "./fieldTypes";

export const validateContentTypeComplex = async (content: any, contentType: ContentTypeComplex): Promise<any> => {
    if (typeof content !== 'object') {
        throw new ContentTypeValidationErrorComplex("ContentType COMPLEX: content is no type object");
    }

    const keys: string[] = Object.keys(contentType.definition);

    for (let key of keys) {
        try {
            await validateFieldType(content[key], contentType.definition[key], key)
        } catch (e: FieldTypeValidationError | any) {
            if (e instanceof FieldTypeValidationError) {
                if (key) {
                    e.path = [key, ...e.path];
                }
                throw e;
            }
        }
    }

    return content;
}