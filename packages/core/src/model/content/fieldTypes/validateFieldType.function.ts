import { FieldType, FieldTypeBoolean, FieldTypeComplex, FieldTypeNumber, FieldTypeString } from "@hessian-cms/common";

export const validateFieldType = async (field: any, fieldType: FieldType): Promise<boolean> => {
    if(fieldType.optional && field === undefined) {
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

export const validateFieldTypeBoolean = async (field: any, fieldType: FieldTypeBoolean): Promise<boolean> => {
    return typeof field === "boolean";
}

export const validateFieldTypeComplex = async (field: any, fieldType: FieldTypeComplex): Promise<boolean> => {
    throw (new Error("Not implemented"));
}