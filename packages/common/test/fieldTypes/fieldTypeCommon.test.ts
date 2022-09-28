import { DiscriminatorFieldType, validateFieldTypeBoolean } from "../../src/model/contentType";
import { FieldTypeValidationErrorBoolean } from "../../src/model/contentType/fieldTypes/validate/errors";

describe("Common field validation tests", () => {
    test("Test simple optional allowed", async () => {
        return expect(validateFieldTypeBoolean(true, {
            type: DiscriminatorFieldType.BOOLEAN,
            optional: true
        })).resolves.toBe(true);
    })

    test("Test simple optional not allowed", async () => {
        return expect(validateFieldTypeBoolean(undefined, {
            type: DiscriminatorFieldType.BOOLEAN,
        })).rejects.toBeInstanceOf(FieldTypeValidationErrorBoolean);
    })
});