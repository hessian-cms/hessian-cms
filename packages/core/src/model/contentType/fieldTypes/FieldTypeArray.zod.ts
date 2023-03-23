import { z } from "zod";
import { FieldTypeBoolean, FieldTypeBooleanSchema } from "./FieldTypeBoolean.zod";
import { FieldTypeNumber, FieldTypeNumberSchema } from "./FieldTypeNumber.zod";
import { FieldTypeObject, FieldTypeObjectSchema } from "./FieldTypeObject.zod";
import { FieldTypeString, FieldTypeStringSchema } from "./FieldTypeString.zod";

export const FIELD_TYPE_ARRAY = "ARRAY";

export const FieldTypeArrayBaseSchema = z.object({
    type: z.literal(FIELD_TYPE_ARRAY),
})

export type FieldTypeArray = z.infer<typeof FieldTypeArrayBaseSchema> & {
    definition: FieldTypeObject
        | FieldTypeBoolean
        | FieldTypeNumber
        | FieldTypeString
        | FieldTypeArray
};

export const FieldTypeArraySchema: z.ZodType<FieldTypeArray> = FieldTypeArrayBaseSchema.extend({
    definition: z.lazy(() => z.union([
        FieldTypeObjectSchema,
        FieldTypeBooleanSchema,
        FieldTypeNumberSchema,
        FieldTypeStringSchema,
        FieldTypeArraySchema
    ]))
})