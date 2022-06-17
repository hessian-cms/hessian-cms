import { ContentTypeComplex, DiscriminatorContentType, FieldTypeComplex } from "@hessian-cms/common";
import { validateContentType } from "../../src/model/content";
import { TEST_DEFINITON_FIELD_TYPE, TEST_OBJ, TEST_OBJ_DEFECT, TEST_OBJ_DEFECT_PATH } from "../fieldTypes/fieldTypeComplex.test";

const CONTENT_TYPE_DEFINITION: ContentTypeComplex = {
    type: DiscriminatorContentType.COMPLEX,
    definition: (TEST_DEFINITON_FIELD_TYPE as FieldTypeComplex).definition
}

describe("ContentType tests", () => {
    test("Simple ContentTypeTest", async () => {
        return expect(await validateContentType(TEST_OBJ, CONTENT_TYPE_DEFINITION)).toBe(TEST_OBJ);
    })

    test("Simple ContentTypeTest with error in definition", async () => {
        try {
            await validateContentType(TEST_OBJ_DEFECT, CONTENT_TYPE_DEFINITION);
            return expect(true).toBe(false);
        } catch (e: any) {
            expect(e.getPath()).toBe(TEST_OBJ_DEFECT_PATH);
        }
    })
})