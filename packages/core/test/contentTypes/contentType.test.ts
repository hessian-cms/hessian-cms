import { DiscriminatorContentType, DiscriminatorFieldType } from "@hessian-cms/common"
import { validateContentType } from "../../src/model/content";

describe("ContentType tests", () => {
    test("Simple ContentTypeTest", async () => {
        return expect(await validateContentType({
            name: "Dampf",
            prename: "Hans",
            birthYear: 1970,
            address: {
                street: "Musterstraße",
                no: 5,
                city: "Musterstadt",
                zip: "12345"
            }
        }, {
            type: DiscriminatorContentType.COMPLEX,
            definition: {
                name: { type: DiscriminatorFieldType.STRING },
                prename: { type: DiscriminatorFieldType.STRING },
                birthYear: {
                    type: DiscriminatorFieldType.NUMBER,
                    from: 1950,
                    to: 2022
                },
                address: {
                    type: DiscriminatorFieldType.COMPLEX,
                    definition: {
                        street: { type: DiscriminatorFieldType.STRING },
                        no: { type: DiscriminatorFieldType.NUMBER, from: 0 },
                        city: { type: DiscriminatorFieldType.STRING },
                        zip: { type: DiscriminatorFieldType.STRING }
                    }
                }
            }
        })).toBe(true);
    })
})