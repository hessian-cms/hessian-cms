import {  FieldTypeObjectSchema, FieldTypeArraySchema, FieldTypeBooleanSchema, FieldTypeNumberSchema, FieldTypeObject, FieldTypeString, FieldTypeStringSchema, FIELD_TYPE_ARRAY, FIELD_TYPE_BOOLEAN, FIELD_TYPE_NUMBER, FIELD_TYPE_OBJECT, FIELD_TYPE_STRING, ContentTypeSchema } from "../src"
import CONTENT_TYPE from "./fixtures/proper.contentmodel.json"

describe("Model tests", () => {
    test("FieldType boolean test", async () => {
        const obj: unknown = {
            type: FIELD_TYPE_ARRAY,
            definition: { type: FIELD_TYPE_NUMBER }
        }
        expect(FieldTypeArraySchema.parse(obj)).toEqual(obj);
    })

    test("FieldType boolean test", async () => {
        const obj: unknown = { type: FIELD_TYPE_BOOLEAN }
        expect(FieldTypeBooleanSchema.parse(obj)).toEqual(obj);
    })

    test("FieldType number test", async () => {
        const obj: unknown = {
            type: FIELD_TYPE_NUMBER,
            min: 5,
            max: 6
        }
        expect(FieldTypeNumberSchema.parse(obj)).toEqual(obj);
    })

    test("FieldType string test", async () => {
        const obj: FieldTypeObject = {
            type: FIELD_TYPE_OBJECT,
            definition: {
                fistname: {
                    type: FIELD_TYPE_STRING,
                    min: 2
                },
                name: {
                    type: FIELD_TYPE_STRING,
                    min: 2
                } 
            }
        }
        expect(FieldTypeObjectSchema.parse(obj)).toEqual(obj);
    })

    test("FieldType string test", async () => {
        const obj: FieldTypeString = {
            type: FIELD_TYPE_STRING,
            min: 5,
            max: 6
        }
        expect(FieldTypeStringSchema.parse(obj)).toEqual(obj);
    })

    test("Successfull model test", async () => {
        expect(ContentTypeSchema.parse(CONTENT_TYPE)).toEqual(CONTENT_TYPE);
    })
})