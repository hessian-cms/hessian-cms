import { z } from "zod";

export const FIELD_TYPE_TEXT: string = "TEXT"
//export const FIELD_TYPE_NUMBER: string = "NUMBER"
export const FIELD_TYPE_BOOLEAN: string = "BOOLEAN"

export const FIELD_TYPES_AVAILABLE: string[] = [
    FIELD_TYPE_TEXT, 
//    FIELD_TYPE_NUMBER, 
    FIELD_TYPE_BOOLEAN]

export const FieldTypeSchema = z.object({
    type: z.union([
        z.literal(FIELD_TYPE_TEXT),
 //       z.literal(FIELD_TYPE_NUMBER),
        z.literal(FIELD_TYPE_BOOLEAN)
    ])
})

export type FieldType = z.infer<typeof FieldTypeSchema>;