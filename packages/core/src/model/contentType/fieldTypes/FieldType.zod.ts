import { z } from "zod";
import { FieldTypeArrayBaseSchema } from "./FieldTypeArray.zod";
import { FieldTypeBooleanSchema } from "./FieldTypeBoolean.zod";
import { FieldTypeNumberSchema } from "./FieldTypeNumber.zod";
import { FieldTypeObjectSchema } from "./FieldTypeObject.zod";
import { FieldTypeStringSchema } from "./FieldTypeString.zod";

export const FieldTypeSchema = z.union([
    FieldTypeBooleanSchema,
    FieldTypeNumberSchema,
    FieldTypeStringSchema,
    FieldTypeObjectSchema,
    FieldTypeArrayBaseSchema
]);

export type FieldType = z.infer<typeof FieldTypeSchema>;