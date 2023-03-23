import { ContentType, ContentTypeSchema } from "../src"
import CONTENT_TYPE from "./fixtures/proper.contentmodel.json"

describe("Model tests", () => {
    test("Successfull model test", async () => {
        expect(ContentTypeSchema.parse(CONTENT_TYPE)).toEqual(CONTENT_TYPE);
    })
})

const c:ContentType = {
    "maxEntries": 5,
    "definition": {
        "type": "OBJECT",
        "definition": {
            "arr": {
                "type": "ARRAY",
                "definition": {
                    "type": "BOOLEAN"
                }
            },
            "num": {
                "type": "NUMBER"
            },
            "str": {
                "type": "STRING"
            },
            "bool": {
                "type": "BOOLEAN"
            },
            "obj": {
                "type": "OBJECT",
                "definition": {
                    "arr": {
                        "type": "ARRAY",
                        "definition": {
                            "type": "BOOLEAN"
                        }
                    },
                    "num": {
                        "type": "NUMBER"
                    },
                    "str": {
                        "type": "STRING"
                    },
                    "bool": {
                        "type": "BOOLEAN"
                    }
                }
            }
        }
    }
}