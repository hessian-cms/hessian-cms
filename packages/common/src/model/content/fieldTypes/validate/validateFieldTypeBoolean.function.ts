import { FieldTypeBoolean } from "../FieldTypeBoolean.interface";
import { FieldTypeValidationErrorBoolean } from "./errors";

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