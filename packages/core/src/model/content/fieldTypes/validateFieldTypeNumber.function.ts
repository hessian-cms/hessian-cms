import { FieldTypeNumber } from "@hessian-cms/common";

export const validateFieldTypeNumber = async (field: any, fieldType: FieldTypeNumber): Promise<boolean> => {
    if (typeof field !== 'number') {
        return false;
    }

    if(fieldType.to) {
        if(field > fieldType.to) {
            return false;
        }
    }

    if(fieldType.from) {
        if(field < fieldType.from) {
            return false;
        }
    }

    if(fieldType.condition) {
        if(!await fieldType.condition(field)) {
            return false;
        }
    }

    return true;
}