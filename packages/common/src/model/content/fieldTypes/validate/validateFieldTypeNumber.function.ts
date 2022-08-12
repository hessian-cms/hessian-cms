import { FieldTypeNumber } from "../FieldTypeNumber.interface"
import { FieldTypeValidationErrorNumber } from "./errors"

/**
 * Validates if field is of field type number
 * 
 * @param field 
 * @param fieldType 
 * @param key 
 * @returns Promise<boolean>
 */
export const validateFieldTypeNumber = async (field: unknown, fieldType: FieldTypeNumber, key?: string): Promise<number> => {
    if (typeof field !== 'number') {
        throw new FieldTypeValidationErrorNumber(key ? [key] : [], "FieldType NUMBER type not boolean")
    }

    if (fieldType.to) {
        if (field > fieldType.to) {
            throw new FieldTypeValidationErrorNumber(key ? [key] : [], `FieldType NUMBER value (${field}) is greater then to (${fieldType.to})`)
        }
    }

    if (fieldType.from) {
        if (field < fieldType.from) {
            throw new FieldTypeValidationErrorNumber(key ? [key] : [], `FieldType NUMBER value (${field}) is less then to (${fieldType.from})`)
        }
    }

    if (fieldType.condition) {
        if (!await fieldType.condition(field)) {
            throw new FieldTypeValidationErrorNumber(key ? [key] : [], `FieldType NUMBER value doesn't meet condition`)
        }
    }

    return field;
}