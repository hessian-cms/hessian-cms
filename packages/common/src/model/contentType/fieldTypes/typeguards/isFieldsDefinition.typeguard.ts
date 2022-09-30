import { FieldsDefinition } from "../FieldsDefinition.interface";
import { isFieldType } from "./isFieldType.typeguard";

export const isFieldsDefinition = (fieldsDefinition: unknown): fieldsDefinition is FieldsDefinition => {
    const keys: string[] = Object.keys(fieldsDefinition as FieldsDefinition);
    return keys.every((key: string) => isFieldType((fieldsDefinition as FieldsDefinition)[key]));
}