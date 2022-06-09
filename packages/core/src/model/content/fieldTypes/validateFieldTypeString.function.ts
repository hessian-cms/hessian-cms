import { FieldTypeString } from "@hessian-cms/common";

export const validateFieldTypeString = async (field: any, fieldType: FieldTypeString): Promise<boolean> => {
    if (typeof field !== 'string') {
        return false;
    }

    if(fieldType.condition) {
        if(!await fieldType.condition(field)) {
            return false;
        }
    }

    if(fieldType.regExp) {
        if(!fieldType.regExp.test(field)) {
            return false;
        }
    }

    return true;
}