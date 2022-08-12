import { FieldType } from "../FieldType.type";
import { FieldTypeValidationError } from "./errors";
import { validateFieldTypeBoolean } from "./validateFieldTypeBoolean.function";
import { validateFieldTypeComplex } from "./validateFieldTypeComplex.function";
import { validateFieldTypeNumber } from "./validateFieldTypeNumber.function";
import { validateFieldTypeString } from "./validateFieldTypeString.function";

/**
 * Validates `field` if it's matching given `fieldType`
 * 
 * TODO: richtig beschreiben
 *  
 * @resolves `unknown`
 * Resolves `field` if matching `fieldType`
 * @rejects {@link FieldTypeValidationError}
 * Throws if fieldType.type is unknown to system
 * @rejects {@link FieldTypeValidationErrorComplex}
 * Throws if error in validateFieldTypeComplex
 * @rejects {@link FieldTypeValidationErrorBoolean}
 * Throws if error in validateFieldTypeBoolean
 * @rejects {@link FieldTypeValidationErrorNumber}
 * Throws if error in validateFieldTypeNumber
 * @rejects {@link FieldTypeValidationErrorString}
 * Throws if error in validateFieldTypeString
 * 
 * @param field - unknown to be checked
 * @param fieldType - definition of field
 * @param key - name of current field (`undefined` if root)
 * @returns `Promise<unknown>` - `field` is matching `fieldType`
 */
export const validateFieldType = async (field: unknown, fieldType: FieldType, key?: string): Promise<unknown> => {
    if (fieldType.optional && field === undefined) {
        return "";
    }

    switch (fieldType.type) {
        case "STRING": return await validateFieldTypeString(field, fieldType, key);
        case "NUMBER": return await validateFieldTypeNumber(field, fieldType, key);
        case "BOOLEAN": return await validateFieldTypeBoolean(field, fieldType, key);
        case "COMPLEX": return await validateFieldTypeComplex(field, fieldType, key);
        default: throw new FieldTypeValidationError(key ? [key] : [], "FieldType doesn't exist");
    }
}