import { DiscriminatorFieldType } from "@hessian-cms/common";
import { validateFieldTypeNumber } from "../../src/model/content";

describe("Number field validation tests", () => {
    test("Test simple number field validation with 0", async () => {
        return expect(validateFieldTypeNumber(0, {
            type: DiscriminatorFieldType.NUMBER
        })).resolves.toBe(true);
    })

    test("Test simple number field validation with 12.2", async () => {
        return expect(validateFieldTypeNumber(12.2, {
            type: DiscriminatorFieldType.NUMBER
        })).resolves.toBe(true);
    })

    test("Test simple number field validation with wrong \"12.2\"", async () => {
        return expect(validateFieldTypeNumber("12.2", {
            type: DiscriminatorFieldType.NUMBER
        })).resolves.toBe(false);
    })

    test("Test simple number field validation with 1 less than from 2", async () => {
        return expect(validateFieldTypeNumber(1, {
            type: DiscriminatorFieldType.NUMBER,
            from: 2
        })).resolves.toBe(false);
    })

    test("Test simple number field validation with 2 more than to 1", async () => {
        return expect(validateFieldTypeNumber(2, {
            type: DiscriminatorFieldType.NUMBER,
            to: 1
        })).resolves.toBe(false);
    })

    test("Test simple number field validation with 2 between 1 and 3", async () => {
        return expect(validateFieldTypeNumber(2, {
            type: DiscriminatorFieldType.NUMBER,
            from: 1,
            to: 3
        })).resolves.toBe(true);
    })

    test("Test simple number field validation with -1 less than 1 and 3", async () => {
        return expect(validateFieldTypeNumber(-1, {
            type: DiscriminatorFieldType.NUMBER,
            from: 1,
            to: 3
        })).resolves.toBe(false);
    })

    test("Test simple number field validation with 4 more than 1 and 3", async () => {
        return expect(validateFieldTypeNumber(4, {
            type: DiscriminatorFieldType.NUMBER,
            from: 1,
            to: 3
        })).resolves.toBe(false);
    })

    test("Test simple number field validation with proper condition", async () => {
        return expect(validateFieldTypeNumber(1, {
            type: DiscriminatorFieldType.NUMBER,
            condition: async (value) => value === 1
        })).resolves.toBe(true);
    })

    test("Test simple number field validation with failing condition", async () => {
        return expect(validateFieldTypeNumber(1, {
            type: DiscriminatorFieldType.NUMBER,
            condition: async (value) => value === 2
        })).resolves.toBe(false);
    })
})