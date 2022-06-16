import { FieldTypeBoolean } from "@hessian-cms/common";

export const validateFieldTypeBoolean = async (field: any, fieldType: FieldTypeBoolean): Promise<boolean> => {
    if(typeof field !== "boolean") {
        return false;
    }

    if(fieldType.condition) {
        if(!await fieldType.condition(field)) {
            return false;
        }
    }

    return true;
}