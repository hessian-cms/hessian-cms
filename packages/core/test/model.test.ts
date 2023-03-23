import { ContentTypeSchema } from "../src"
import CONTENT_TYPE from "./fixtures/proper.contentmodel.json"

describe("Model tests", () => {
    test("Successfull model test", async () => {
        expect(ContentTypeSchema.parse(CONTENT_TYPE)).toEqual(CONTENT_TYPE);
    })
})