import { validateFieldTypeString } from "../../src/model/content"

const TEST_STRING = "TeSt"
const TEST_STRING_STARTS_WITH = "Te";
const TEST_STRING_ENDS_WITH = "St";

describe("String field validation tests", () => {
    test("Test simple string field validation", async () => {
        return expect(validateFieldTypeString("", {
            type: "STRING"
        })).resolves.toBe(true);
    })

    test("Test simple string field validation value not string", async () => {
        return expect(validateFieldTypeString(1, {
            type: "STRING"
        })).resolves.toBe(false);
    })

    test("Test simple string field validation with proper condition", async () => {
        return expect(validateFieldTypeString(TEST_STRING, {
            type: "STRING",
            condition: async (value:string) => {
                return value.startsWith(TEST_STRING_STARTS_WITH) && value.endsWith(TEST_STRING_ENDS_WITH)
            }
        })).resolves.toBe(true);
    })

    test("Test simple string field validation with failing condition", async () => {
        return expect(validateFieldTypeString(TEST_STRING, {
            type: "STRING",
            condition: async (value:string) => {
                return value.startsWith(TEST_STRING_ENDS_WITH) && value.endsWith(TEST_STRING_STARTS_WITH)
            }
        })).resolves.toBe(false);
    })

    test("Test simple string field validation with proper regexp", async () => {
        return expect(validateFieldTypeString(TEST_STRING, {
            type: "STRING",
            regExp: new RegExp(`^${TEST_STRING_STARTS_WITH}`)
        })).resolves.toBe(true);
    })

    test("Test simple string field validation with failing regexp", async () => {
        return expect(validateFieldTypeString(TEST_STRING, {
            type: "STRING",
            regExp: new RegExp(`^${TEST_STRING_ENDS_WITH}`)
        })).resolves.toBe(false);
    })
})