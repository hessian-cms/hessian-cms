import { DiscriminatorFieldType } from "../DiscriminatorFieldType.enum";
import { FieldTypeComplex } from "../FieldTypeComplex.interface";
import { isFieldType } from "./isFieldType.typeguard";

export const isFieldTypeComplex = <T extends Record<string, unknown> = Record<string, unknown>>(obj: unknown): obj is FieldTypeComplex<T> => {
    const { type, definition } = obj as FieldTypeComplex<T>;

    if(type !== DiscriminatorFieldType.COMPLEX) {
        return false;
    }

    if (typeof definition !== "object") {
        return false;
    }

    const keys: string[] = Object.keys(definition);

    if (keys.length <= 0) {
        return false;
    }

    for (const key of keys) {
        if (!isFieldType(definition[key])) {
            return false;
        }
    }

    return true;
}