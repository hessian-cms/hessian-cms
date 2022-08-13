import { DiscriminatorFieldType, validateFieldTypeString } from "../../src/model/contentType"
import { FieldTypeValidationErrorString } from "../../src/model/contentType/fieldTypes/validate/errors";

const TEST_STRING = "TeSt"
const TEST_STRING_STARTS_WITH = "Te";
const TEST_STRING_ENDS_WITH = "St";

describe("String field validation tests", () => {
    test("Test simple string field validation", async () => {
        return expect(validateFieldTypeString(TEST_STRING, {
            type: DiscriminatorFieldType.STRING
        })).resolves.toBe(TEST_STRING);
    })

    test("Test simple string field validation value not string", async () => {
        return expect(validateFieldTypeString(1, {
            type: DiscriminatorFieldType.STRING
        })).rejects.toBeInstanceOf(FieldTypeValidationErrorString);
    })

    test("Test simple string field validation with proper condition", async () => {
        return expect(validateFieldTypeString(TEST_STRING, {
            type: DiscriminatorFieldType.STRING,
            condition: async (value:string) => {
                return value.startsWith(TEST_STRING_STARTS_WITH) && value.endsWith(TEST_STRING_ENDS_WITH)
            }
        })).resolves.toBe(TEST_STRING);
    })

    test("Test simple string field validation with failing condition", async () => {
        return expect(validateFieldTypeString(TEST_STRING, {
            type: DiscriminatorFieldType.STRING,
            condition: async (value:string) => {
                return value.startsWith(TEST_STRING_ENDS_WITH) && value.endsWith(TEST_STRING_STARTS_WITH)
            }
        })).rejects.toBeInstanceOf(FieldTypeValidationErrorString);
    })

    test("Test simple string field validation with proper regexp", async () => {
        return expect(validateFieldTypeString(TEST_STRING, {
            type: DiscriminatorFieldType.STRING,
            regExp: new RegExp(`^${TEST_STRING_STARTS_WITH}`)
        })).resolves.toBe(TEST_STRING);
    })

    test("Test simple string field validation with failing regexp", async () => {
        return expect(validateFieldTypeString(TEST_STRING, {
            type: DiscriminatorFieldType.STRING,
            regExp: new RegExp(`^${TEST_STRING_ENDS_WITH}`)
        })).rejects.toBeInstanceOf(FieldTypeValidationErrorString);
    })
})