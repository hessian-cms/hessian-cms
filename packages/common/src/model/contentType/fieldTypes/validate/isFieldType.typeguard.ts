import { DiscriminatorFieldType, FIELD_TYPES } from "../DiscriminatorFieldType.enum";
import { FieldType } from "../FieldType.type";
import { FieldTypeBoolean } from "../FieldTypeBoolean.interface";
import { FieldTypeComplex } from "../FieldTypeComplex.interface";
import { FieldTypeNumber } from "../FieldTypeNumber.interface";
import { FieldTypeString } from "../FieldTypeString.interface";
import { isFieldTypeBoolean } from "./isFieldTypeBoolean.typeguard";
import { isFieldTypeComplex } from "./isFieldTypeComplex.typeguard";
import { isFieldTypeNumber } from "./isFieldTypeNumber.typeguard";
import { isFieldTypeString } from "./isFieldTypeString.typeguard";

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