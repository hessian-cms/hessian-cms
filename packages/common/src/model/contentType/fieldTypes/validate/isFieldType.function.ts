import { DiscriminatorFieldType, FIELD_TYPES } from "../DiscriminatorFieldType.enum";
import { FieldType } from "../FieldType.type";
import { FieldTypeBoolean } from "../FieldTypeBoolean.interface";
import { FieldTypeComplex } from "../FieldTypeComplex.interface";
import { FieldTypeNumber } from "../FieldTypeNumber.interface";
import { FieldTypeString } from "../FieldTypeString.interface";

/**
 * TypeGuard for FieldType
 * @param obj - unknown
 * @returns obj is FieldType
 */
export const isFieldType = (obj: unknown): obj is FieldType => {
    const { type, optional, hidden, condition } = obj as FieldType;

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

    switch (type) {
        case DiscriminatorFieldType.BOOLEAN: return isFieldTypeBoolean(obj as FieldTypeBoolean);
        case DiscriminatorFieldType.STRING: return isFieldTypeString(obj as FieldTypeString);
        case DiscriminatorFieldType.NUMBER: return isFieldTypeNumber(obj as FieldTypeNumber);
        case DiscriminatorFieldType.COMPLEX: return isFieldTypeComplex(obj as FieldTypeComplex);
        default: return false;
    }
}

const isFieldTypeString = (obj: FieldTypeString): obj is FieldTypeString => {
    if(obj.regExp) {
        if (!(obj.regExp instanceof RegExp)) {
            return false
        }
    }

    return true;
}

const isFieldTypeBoolean = (obj: FieldTypeBoolean): obj is FieldTypeBoolean => {
    return obj.type === DiscriminatorFieldType.BOOLEAN;
}

const isFieldTypeNumber = (obj: FieldTypeNumber): obj is FieldTypeNumber => {
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

const isFieldTypeComplex = <T extends Record<string, unknown> = Record<string, unknown>>(obj: FieldTypeComplex<T>): obj is FieldTypeComplex<T> => {
    if (typeof obj.definition !== "object") {
        return false;
    }

    const keys: string[] = Object.keys(obj.definition);

    if (keys.length <= 0) {
        return false;
    }

    for (const key of keys) {
        if (!isFieldType(obj.definition[key])) {
            return false;
        }
    }

    return true;
}