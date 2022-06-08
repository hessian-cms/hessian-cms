import { FieldType, FieldTypeBoolean, FieldTypeComplex, FieldTypeNumber, FieldTypeString } from "@hessian-cms/common";

export const validateFieldType = async (field: any, fieldType: FieldType): Promise<boolean> => {
    switch (fieldType.type) {
        case "STRING": return await validateFieldTypeString(field, fieldType); break;
        case "NUMBER": return await validateFieldTypeNumber(field, fieldType); break;
        case "BOOLEAN": return await validateFieldTypeBoolean(field, fieldType); break;
        case "COMPLEX": return await validateFieldTypeComplex(field, fieldType); break;
        default: return false;
    }
}

export const validateFieldTypeString = async (field: any, fieldType: FieldTypeString): Promise<boolean> => {
    if (typeof field !== 'string') {
        return false;
    }

    return true;
}

export const validateFieldTypeNumber = async (field: any, fieldType: FieldTypeNumber): Promise<boolean> => {
    if (typeof field !== 'number') {
        return false;
    }

    return true;
}

export const validateFieldTypeBoolean = async (field: any, fieldType: FieldTypeBoolean): Promise<boolean> => {
    return typeof field === "boolean";
}

export const validateFieldTypeComplex = async (field: any, fieldType: FieldTypeComplex): Promise<boolean> => {
    throw (new Error("Not implemented"));
}