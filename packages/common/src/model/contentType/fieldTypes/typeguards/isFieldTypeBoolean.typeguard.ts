import { DiscriminatorFieldType } from "../DiscriminatorFieldType.enum";
import { FieldTypeBoolean } from "../FieldTypeBoolean.interface";

export const isFieldTypeBoolean = (obj: unknown): obj is FieldTypeBoolean => {
    const {type} = obj as FieldTypeBoolean;
    return type === DiscriminatorFieldType.BOOLEAN;
}