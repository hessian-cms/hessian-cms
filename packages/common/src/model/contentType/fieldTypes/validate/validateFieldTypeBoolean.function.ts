import { FieldTypeBoolean } from "../FieldTypeBoolean.interface";
import { FieldTypeValidationErrorBoolean } from "./errors";

/**
 * Validates if fiels is of field type boolean
 * 
 * @param field - field to be validated
 * @param fieldType - FieldTypeBoolean to use for validation
 * @param key - current postion in object
 * @returns Promise<boolean>
 */
export const validateFieldTypeBoolean = async (field: unknown, fieldType: FieldTypeBoolean, key?: string): Promise<boolean> => {
    if (typeof field !== "boolean") {
        throw new FieldTypeValidationErrorBoolean(key ? [key] : [], "FieldType BOOLEAN type not boolean");
    }

    if (fieldType.condition) {
        if (!await fieldType.condition(field)) {
            throw new FieldTypeValidationErrorBoolean(key ? [key] : [], "FieldType BOOLEAN value doesn't meet condition");
        }
    }

    return field;
}