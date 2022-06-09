import { FieldTypeBoolean } from "@hessian-cms/common";

export const validateFieldTypeBoolean = async (field: any, fieldType: FieldTypeBoolean): Promise<boolean> => {
    return typeof field === "boolean";
}