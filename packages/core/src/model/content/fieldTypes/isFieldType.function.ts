import { FieldType, FIELD_TYPES, FIELD_TYPE_BOOLEAN, FIELD_TYPE_COMPLEX, FIELD_TYPE_NUMBER, FIELD_TYPE_STRING } from "@hessian-cms/common";

export const isFieldType = (obj: any): obj is FieldType => {
    const { type, optional, hidden, condition } = obj;

    if(!FIELD_TYPES.includes(type)) {
        return false;  
    }

    if(optional !== undefined && typeof optional !== 'boolean') {
        return false;
    }

    if(hidden !== undefined && typeof hidden !== 'boolean') {
        return false;
    }

    if(condition !== undefined && typeof condition !== 'function') {
        return false;
    }

    return true;
}