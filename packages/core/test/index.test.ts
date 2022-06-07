import { validateContentType } from "../src/model/content/validateContentType.function";
import { SIMPLE_COMPLEX_CONTENT_MODEL, SIMPLE_COMPLEX_CONTENT_MODEL_DATA_CORRECT, SIMPLE_COMPLEX_CONTENT_MODEL_DATA_WRONG } from "./testData/simpleContentType.data";

describe("Index test on CORE", () => {
    test("Content Validation", async () => {
        return expect(validateContentType(
            SIMPLE_COMPLEX_CONTENT_MODEL_DATA_CORRECT,
            SIMPLE_COMPLEX_CONTENT_MODEL))
            .resolves
            .toBe(true);
    })

    test("Content Validation", async () => {
        return expect(validateContentType(
            SIMPLE_COMPLEX_CONTENT_MODEL_DATA_WRONG,
            SIMPLE_COMPLEX_CONTENT_MODEL))
            .resolves
            .toBe(false);
    })
})