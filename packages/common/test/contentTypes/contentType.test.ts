
import { Asset, AssetError, ContentTypeAsset, ContentTypeComplex, DiscriminatorContentType, FieldTypeComplex } from "../../src/model/content";
import { TEST_DEFINITON_FIELD_TYPE, TEST_OBJ, TEST_OBJ_DEFECT, TEST_OBJ_DEFECT_PATH } from "../fieldTypes/fieldTypeComplex.test";
import { resolve } from "path";
import { validateContentType } from "../../src/model/content/validate/validateContentType.function";

const CONTENT_TYPE_COMPLEX_DEFINITION: ContentTypeComplex = {
    type: DiscriminatorContentType.COMPLEX,
    definition: (TEST_DEFINITON_FIELD_TYPE as FieldTypeComplex).definition
}

const ASSET: Asset = {
    filename: "test.txt",
    location: resolve("test/index.test.ts"),
    mimetype: "text/plain"
}

const CONTENT_TYPE_ASSET_DEFINITION: ContentTypeAsset = {
    type: DiscriminatorContentType.ASSET,
    filter: {
        sizeFrom: 100,
        sizeTo: 200
    }
}

const CONTENT_TYPE_ASSET_DEFINITION_WITH_ERROR: ContentTypeAsset = {
    type: DiscriminatorContentType.ASSET,
    filter: {
        sizeFrom: 190,
        sizeTo: 200
    }
}

describe("ContentType tests", () => {
    test("Simple ContentTypeComplex Test", async () => {
        return expect(validateContentType(TEST_OBJ, CONTENT_TYPE_COMPLEX_DEFINITION)).resolves.toBe(TEST_OBJ);
    })

    test("Simple ContentTypeComplex Test with error in definition", async () => {
        try {
            await validateContentType(TEST_OBJ_DEFECT, CONTENT_TYPE_COMPLEX_DEFINITION);
            return expect(true).toBe(false);
        } catch (e: any) {
            expect(e.getPath()).toBe(TEST_OBJ_DEFECT_PATH);
        }
    })

    test("Simple ContentTypeAsset Test", async () => {
        return expect(validateContentType(ASSET, CONTENT_TYPE_ASSET_DEFINITION)).resolves.toBe(ASSET);
    })

    test("Simple ContentTypeAsset Test with Error", async () => {
        return expect(validateContentType(ASSET, CONTENT_TYPE_ASSET_DEFINITION_WITH_ERROR)).rejects.toBeInstanceOf(AssetError);
    })

    test("Simple ContentTypeAsset Test with Error - file doesn't exist", async () => {
        return expect(validateContentType({...ASSET, location: "./test.txt"}, CONTENT_TYPE_ASSET_DEFINITION)).rejects.toBeInstanceOf(AssetError);
    })
})