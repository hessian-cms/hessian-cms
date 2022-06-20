import { DiscriminatorFieldType, FIELD_TYPES } from "../DiscriminatorFieldType.enum";
import { FieldType } from "../FieldType.type";
import { FieldTypeString } from "../FieldTypeString.interface";

export const isFieldType = (obj: any): obj is FieldType => {
    const { type, optional, hidden, condition } = obj;

    if (!FIELD_TYPES.includes(type)) {
        return false;
    }

    if (optional !== undefined && typeof optional !== 'boolean') {
        return false;
    }

    if (hidden !== undefined && typeof hidden !== 'boolean') {
        return false;
    }

    if (condition !== undefined && typeof condition !== 'function') {
        return false;
    }

    switch (obj.type) {
        case DiscriminatorFieldType.BOOLEAN: return isFieldTypeBoolean(obj);
        case DiscriminatorFieldType.STRING: return isFieldTypeString(obj);
        case DiscriminatorFieldType.NUMBER: return isFieldTypeNumber(obj);
        case DiscriminatorFieldType.COMPLEX: return isFieldTypeComplex(obj);
        default: return false;
    }
}

const isFieldTypeString = (obj: any): obj is FieldTypeString => {
    if(obj.regExp) {
        if (!(obj.regExp instanceof RegExp)) {
            return false
        }
    }

    return true;
}

const isFieldTypeBoolean = (obj: any): obj is FieldTypeString => {
    return obj.type === DiscriminatorFieldType.BOOLEAN;
}

const isFieldTypeNumber = (obj: any): obj is FieldTypeString => {
    if (obj.from !== undefined) {
        if (typeof obj.from !== "number") {
            return false;
        }
    }

    if (obj.to !== undefined) {
        if (typeof obj.to !== "number") {
            return false;
        }
    }

    return true;
}

const isFieldTypeComplex = (obj: any): obj is FieldTypeString => {
    if (typeof obj.definition !== "object") {
        return false;
    }

    const keys: string[] = Object.keys(obj.definition);

    if (keys.length <= 0) {
        return false;
    }

    for (let key of keys) {
        if (!isFieldType(obj.definition[key])) {
            return false;
        }
    }

    return true;
}