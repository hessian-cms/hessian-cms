import { DiscriminatorFieldType } from "@hessian-cms/common";
import { validateFieldTypeComplex } from "../../src/model/content";

describe("Complex field validation tests", () => {
    test("Test simple person example", async () => {
        return expect(await validateFieldTypeComplex({
            name: "Dampf",
            prename: "Hans",
            birthYear: 1970,
            address: {
                street: "Musterstraße",
                no: 5,
                city: "Musterstadt",
                zip: "12345"
            }
        },{
            type: DiscriminatorFieldType.COMPLEX,
            definition: {
                name: {type: DiscriminatorFieldType.STRING},
                prename: {type: DiscriminatorFieldType.STRING},
                birthYear: {
                    type:DiscriminatorFieldType.NUMBER,
                    from: 1950,
                    to: 2022
                },
                address: {
                    type: DiscriminatorFieldType.COMPLEX,
                    definition: {
                        street: {type: DiscriminatorFieldType.STRING},
                        no: {type: DiscriminatorFieldType.NUMBER, from: 0},
                        city: {type: DiscriminatorFieldType.STRING},
                        zip: {type: DiscriminatorFieldType.STRING}
                    }
                }
            }
        })).toBe(true);
    })
});