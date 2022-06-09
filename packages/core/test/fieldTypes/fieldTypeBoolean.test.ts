import { validateFieldTypeBoolean } from "../../src/model/content";

describe("Boolean field validation tests", () => {
    test("Test simple boolean field validation with true", async () => {
        return expect(validateFieldTypeBoolean(true, {
            type: "BOOLEAN"
        })).resolves.toBe(true);
    })

    test("Test simple boolean field validation with false", async () => {
        return expect(validateFieldTypeBoolean(true, {
            type: "BOOLEAN"
        })).resolves.toBe(true);
    })

    test("Test simple boolean field validation with proper condition", async () => {
        return expect(validateFieldTypeBoolean(true, {
            type: "BOOLEAN",
            condition: async (value) => { return value === true }
        })).resolves.toBe(true);
    })

    test("Test simple boolean field validation with failing condition", async () => {
        return expect(validateFieldTypeBoolean(true, {
            type: "BOOLEAN",
            condition: async (value) => { return value === false }
        })).resolves.toBe(true);
    })

    test("Test simple boolean field validation with wrong type", async () => {
        return expect(validateFieldTypeBoolean("true", {
            type: "BOOLEAN"
        })).resolves.toBe(false);
    })
})