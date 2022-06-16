import { DiscriminatorFieldType } from "@hessian-cms/common";
import { isFieldType } from "../../src/model/content";


describe("Test on function isFieldType", () => {
    test("Test proper field type for BOOLEAN", async () => {
        return expect(isFieldType({
            type: DiscriminatorFieldType.BOOLEAN
        })).toBe(true);
    })

    test("Test proper field type for STRING", async () => {
        return expect(isFieldType({
            type: DiscriminatorFieldType.STRING
        })).toBe(true);
    })

    test("Test proper field type for STRING - with proper regExp", async () => {
        return expect(isFieldType({
            type: DiscriminatorFieldType.STRING,
            regExp: /asdad/
        })).toBe(true);
    })

    test("Test proper field type for STRING - with incorrect regExp", async () => {
        return expect(isFieldType({
            type: DiscriminatorFieldType.STRING,
            regExp: "wrong regexp"
        })).toBe(false);
    })

    test("Test proper field type for NUMBER", async () => {
        return expect(isFieldType({
            type: DiscriminatorFieldType.NUMBER
        })).toBe(true);
    })

    test("Test proper field type for COMPLEX", async () => {
        return expect(isFieldType({
            type: DiscriminatorFieldType.COMPLEX,
            definition: {
                demo: {
                    type: DiscriminatorFieldType.BOOLEAN
                }
            }
        })).toBe(true);
    })

    test("Test wrong field type for BOOLEAN - failing because of wrong type of optional", async () => {
        return expect(isFieldType({
            type: DiscriminatorFieldType.BOOLEAN,
            optional: 42
        })).toBe(false);
    })

    test("Test wrong field type for BOOLEAN - failing because of wrong type of hidden", async () => {
        return expect(isFieldType({
            type: DiscriminatorFieldType.BOOLEAN,
            hidden: 42
        })).toBe(false);
    })

    test("Test proper field type for BOOLEAN with condition", async () => {
        return expect(isFieldType({
            type: DiscriminatorFieldType.BOOLEAN,
            condition: (v:boolean)=>true
        })).toBe(true);
    })

    test("Test wrong field type for BOOLEAN - failing because of wrong type of condition", async () => {
        return expect(isFieldType({
            type: DiscriminatorFieldType.BOOLEAN,
            condition: 42
        })).toBe(false);
    })

    test("Test wrong field type for String - RegExp wrong type", async () => {
        return expect(isFieldType({
            type: DiscriminatorFieldType.BOOLEAN,
            regExp: "Test"
        })).toBe(true);
    })
});