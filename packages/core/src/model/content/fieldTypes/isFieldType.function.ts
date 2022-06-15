import { FieldType, FIELD_TYPES } from "@hessian-cms/common";

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