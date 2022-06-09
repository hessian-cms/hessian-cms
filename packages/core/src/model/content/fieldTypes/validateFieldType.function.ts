import { FieldType } from "@hessian-cms/common";
import { validateFieldTypeBoolean } from "./validateFieldTypeBoolean.function";
import { validateFieldTypeComplex } from "./validateFieldTypeComplex.function";
import { validateFieldTypeNumber } from "./validateFieldTypeNumber.function";
import { validateFieldTypeString } from "./validateFieldTypeString.function";

export const validateFieldType = async (field: any, fieldType: FieldType): Promise<boolean> => {
    if (fieldType.optional && field === undefined) {
        return true;
    }

    switch (fieldType.type) {
        case "STRING": return await validateFieldTypeString(field, fieldType); break;
        case "NUMBER": return await validateFieldTypeNumber(field, fieldType); break;
        case "BOOLEAN": return await validateFieldTypeBoolean(field, fieldType); break;
        case "COMPLEX": return await validateFieldTypeComplex(field, fieldType); break;
        default: throw new Error("FieldType doesn't exist");
    }
}