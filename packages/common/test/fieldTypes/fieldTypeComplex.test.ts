import { DiscriminatorFieldType, FieldType, validateFieldTypeComplex } from "../../src/model/contentType";

export const TEST_DEFINITON_FIELD_TYPE: FieldType = {
    type: DiscriminatorFieldType.COMPLEX,
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
}

export const TEST_OBJ: object = {
    name: "Dampf",
    prename: "Hans",
    birthYear: 1970,
    address: {
        street: "Musterstraße",
        no: 5,
        city: "Musterstadt",
        zip: "12345"
    }
}

export const TEST_OBJ_DEFECT: object = {
    name: "Dampf",
    prename: "Hans",
    birthYear: 1970,
    address: {
        street: "Musterstraße",
        no: 5,
        city: "Musterstadt",
        zip: 12345
    }
}

export const TEST_OBJ_DEFECT_PATH: string = "address.zip";

describe("Complex field validation tests", () => {
    test("Test simple person example", async () => {
        return expect(await validateFieldTypeComplex(TEST_OBJ, TEST_DEFINITON_FIELD_TYPE)).toBe(TEST_OBJ);
    });

    test("Test simple person with error", async () => {
        try {
            await validateFieldTypeComplex(TEST_OBJ_DEFECT, TEST_DEFINITON_FIELD_TYPE);
            return expect(true).toBe(false);
        } catch (e: any) {
            expect(e.getPath()).toBe(TEST_OBJ_DEFECT_PATH);
        }
    })
});