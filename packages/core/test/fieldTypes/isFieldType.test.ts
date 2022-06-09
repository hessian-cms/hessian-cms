import { FIELD_TYPE_BOOLEAN, FIELD_TYPE_COMPLEX, FIELD_TYPE_NUMBER, FIELD_TYPE_STRING } from "@hessian-cms/common";
import { isFieldType } from "../../src/model/content";


describe("Test on function isFieldType", () => {
    test("Test proper field type for BOOLEAN", async () => {
        return expect(isFieldType({
            type: FIELD_TYPE_BOOLEAN
        })).toBe(true);
    })

    test("Test proper field type for STRING", async () => {
        return expect(isFieldType({
            type: FIELD_TYPE_STRING
        })).toBe(true);
    })

    test("Test proper field type for NUMBER", async () => {
        return expect(isFieldType({
            type: FIELD_TYPE_NUMBER
        })).toBe(true);
    })

    test("Test proper field type for COMPLEX", async () => {
        return expect(isFieldType({
            type: FIELD_TYPE_COMPLEX
        })).toBe(true);
    })

    test("Test wrong field type for BOOLEAN - failing because of wrong type of optional", async () => {
        return expect(isFieldType({
            type: FIELD_TYPE_BOOLEAN,
            optional: 42
        })).toBe(false);
    })

    test("Test wrong field type for BOOLEAN - failing because of wrong type of hidden", async () => {
        return expect(isFieldType({
            type: FIELD_TYPE_BOOLEAN,
            hidden: 42
        })).toBe(false);
    })

    test("Test proper field type for BOOLEAN with condition", async () => {
        return expect(isFieldType({
            type: FIELD_TYPE_BOOLEAN,
            condition: (v:boolean)=>true
        })).toBe(true);
    })

    test("Test wrong field type for BOOLEAN - failing because of wrong type of condition", async () => {
        return expect(isFieldType({
            type: FIELD_TYPE_BOOLEAN,
            condition: 42
        })).toBe(false);
    })
});