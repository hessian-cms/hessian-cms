import { FieldType } from "@hessian-cms/common";
import { FieldTypeValidationError } from "./errors";
import { validateFieldTypeBoolean } from "./validateFieldTypeBoolean.function";
import { validateFieldTypeComplex } from "./validateFieldTypeComplex.function";
import { validateFieldTypeNumber } from "./validateFieldTypeNumber.function";
import { validateFieldTypeString } from "./validateFieldTypeString.function";

export const validateFieldType = async (field: any, fieldType: FieldType, key?: string): Promise<any> => {
    if (fieldType.optional && field === undefined) {
        return field;
    }

    switch (fieldType.type) {
        case "STRING": return await validateFieldTypeString(field, fieldType, key);
        case "NUMBER": return await validateFieldTypeNumber(field, fieldType, key);
        case "BOOLEAN": return await validateFieldTypeBoolean(field, fieldType, key);
        case "COMPLEX": return await validateFieldTypeComplex(field, fieldType, key);
        default: throw new FieldTypeValidationError(key ? [key] : [], "FieldType doesn't exist");
    }
}