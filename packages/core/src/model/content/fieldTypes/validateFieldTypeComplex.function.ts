import { FieldTypeComplex } from "@hessian-cms/common";
import { validateFieldType } from "./validateFieldType.function";

export const validateFieldTypeComplex = async (field: any, fieldType: FieldTypeComplex): Promise<boolean> => {
    if (typeof field !== 'object') {
        return false;
    }

    const keys: string[] = Object.keys(fieldType.definition);

    for (let key of keys) {
        if (!await validateFieldType(field[key], fieldType.definition[key])) {
            return false;
        }
    }

    return true;
}