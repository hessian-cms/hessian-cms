import { FieldTypeString } from "../FieldTypeString.interface";
import { FieldTypeValidationErrorString } from "./errors";

export const validateFieldTypeString = async (field: unknown, fieldType: FieldTypeString, key?: string): Promise<string> => {
    if (typeof field !== 'string') {
        throw new FieldTypeValidationErrorString(key ? [key] : [], "FieldType STRING type not string")
    }

    if (fieldType.condition) {
        if (!await fieldType.condition(field)) {
            throw new FieldTypeValidationErrorString(key ? [key] : [], `FieldType STRING value doesn't meet condition`)
        }
    }

    if (fieldType.regExp) {
        if (!fieldType.regExp.test(field)) {
            throw new FieldTypeValidationErrorString(key ? [key] : [], `FieldType STRING value doesn't meet regExp (${fieldType.regExp})`, field)
        }
    }

    return field;
}