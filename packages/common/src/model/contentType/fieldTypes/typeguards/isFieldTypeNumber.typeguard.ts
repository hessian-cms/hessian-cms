import { optionalTypeOf } from "../../../helper";
import { FieldTypeNumber } from "../FieldTypeNumber.interface";

export const isFieldTypeNumber = (obj: unknown): obj is FieldTypeNumber => {
    const { from, to } = obj as FieldTypeNumber;

    if (!optionalTypeOf(from, "number")) {
        return false;
    }

    if (!optionalTypeOf(to, "number")) {
        return false;
    }

    return true;
}