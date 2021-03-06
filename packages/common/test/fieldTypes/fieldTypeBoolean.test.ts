import { DiscriminatorFieldType, validateFieldTypeBoolean } from "../../src/model/content";
import { FieldTypeValidationErrorBoolean } from "../../src/model/content/fieldTypes/validate/errors";

describe("Boolean field validation tests", () => {
    test("Test simple boolean field validation with true", async () => {
        return expect(validateFieldTypeBoolean(true, {
            type: DiscriminatorFieldType.BOOLEAN
        })).resolves.toBe(true);
    })

    test("Test simple boolean field validation with false", async () => {
        return expect(validateFieldTypeBoolean(false, {
            type: DiscriminatorFieldType.BOOLEAN
        })).resolves.toBe(false);
    })

    test("Test simple boolean field validation with proper condition", async () => {
        return expect(validateFieldTypeBoolean(true, {
            type: DiscriminatorFieldType.BOOLEAN,
            condition: async (value) => { return value === true }
        })).resolves.toBe(true);
    })

    test("Test simple boolean field validation with failing condition", async () => {
        return expect(validateFieldTypeBoolean(true, {
            type: DiscriminatorFieldType.BOOLEAN,
            condition: async (value) => { return value === false }
        })).rejects.toBeInstanceOf(FieldTypeValidationErrorBoolean);
    })

    test("Test simple boolean field validation with wrong type", async () => {
        return expect(validateFieldTypeBoolean("true", {
            type: DiscriminatorFieldType.BOOLEAN
        })).rejects.toBeInstanceOf(FieldTypeValidationErrorBoolean);
    })
})