import { FieldTypeComplex } from "../FieldTypeComplex.interface";
import { FieldTypeValidationError, FieldTypeValidationErrorComplex } from "./errors";
import { validateFieldType } from "./validateFieldType.function";

/**
 * Validates if field is of field type complex
 * 
 * @param field - field to be validated
 * @param fieldType - FieldTypeComplex to use for valiation
 * @param key - current postion in object
 * @returns Promise<boolean>
 */
export const validateFieldTypeComplex = async (field: unknown, fieldType: FieldTypeComplex, key?: string): Promise<unknown> => {
    if (typeof field !== 'object') {
        throw new FieldTypeValidationErrorComplex(key ? [key] : [], "FieldType COMPLEX type not object");
    }

    const keys: string[] = Object.keys(fieldType.definition);

    for (const key of keys) {
        try {
            await validateFieldType((field as Record<string, unknown>)[key], fieldType.definition[key]);
        } catch (e: FieldTypeValidationError | unknown) {
            if (e instanceof FieldTypeValidationError) {
                if (key) {
                    e.path = [key, ...e.path];
                }
                throw e;
            }
        }
    }

    return field;
}