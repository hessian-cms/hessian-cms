import { FieldTypeComplex } from "@hessian-cms/common";
import { FieldTypeValidationError, FieldTypeValidationErrorComplex } from "./errors";
import { validateFieldType } from "./validateFieldType.function";

export const validateFieldTypeComplex = async (field: any, fieldType: FieldTypeComplex, key?: string): Promise<object> => {
    if (typeof field !== 'object') {
        throw new FieldTypeValidationErrorComplex(key?[key]:[], "FieldType COMPLEX type not object");
    }

    const keys: string[] = Object.keys(fieldType.definition);

    for (let key of keys) {
        try {
            await validateFieldType(field[key], fieldType.definition[key]);
        } catch (e: FieldTypeValidationError | any) {
            if (e instanceof FieldTypeValidationError) {
                if(key) {
                    e.path = [key, ...e.path];
                }
                throw e;
            }
        }
    }

    return field;
}