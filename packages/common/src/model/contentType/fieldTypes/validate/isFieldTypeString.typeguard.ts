import { FieldTypeString } from "../FieldTypeString.interface";

export const isFieldTypeString = (obj: unknown): obj is FieldTypeString => {
    const {regExp} = obj as FieldTypeString;
    if(regExp !== undefined) {
        if (!(regExp instanceof RegExp)) {
            return false
        }
    }

    return true;
}