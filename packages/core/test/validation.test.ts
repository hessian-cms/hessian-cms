import { getFieldTypeValidator } from "../src"
import CONTENT_MODEL from "./fixtures/person.contentmodel.json"
import CONTENT_DATA from "./fixtures/person.data.json"

describe("Validation tests", () => {
    test("Validate model with data test", async () => {
        expect(getFieldTypeValidator(CONTENT_MODEL.definition).parse(CONTENT_DATA)).toEqual(CONTENT_DATA)
    })
})