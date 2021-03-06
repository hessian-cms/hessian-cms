import { ContentTypeValidationErrorComplex } from './errors'
import { FieldTypeValidationError, validateFieldType } from '../fieldTypes/validate'
import { ContentTypeComplex } from '../ContentTypeComplex.interface';

export const validateContentTypeComplex = async (content: unknown, contentType: ContentTypeComplex): Promise<unknown> => {
    if (typeof content !== 'object') {
        throw new ContentTypeValidationErrorComplex("ContentType COMPLEX: content is no type object");
    }

    const keys: string[] = Object.keys(contentType.definition);

    for (const key of keys) {
        try {
            await validateFieldType((content as Record<string,unknown>)[key], contentType.definition[key], key)
        } catch (e: FieldTypeValidationError | unknown) {
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