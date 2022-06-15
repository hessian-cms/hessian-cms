import { DiscriminatorFieldType } from "@hessian-cms/common";
import { validateFieldTypeBoolean } from "../../src/model/content";

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
        })).resolves.toBe(false);
    })
});