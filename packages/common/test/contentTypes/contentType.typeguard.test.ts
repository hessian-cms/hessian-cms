import { ContentTypeAssetFilter, ContentTypeComplex, DiscriminatorContentType, DiscriminatorFieldType, isContentTypeAsset, isContentTypeAssetFilter, isContentTypeComplex } from "../../src/model";
import { isContentType } from "../../src/model";

const WRONG = {
    sizeFrom: "Hello",
    siteTo: "Hessian"
}

const CORRECT_CONTENT_TYPE_ASSET_FILTER: ContentTypeAssetFilter = {
    sizeFrom: 100,
    sizeTo: 200
}

const CORRECT_CONTENT_TYPE_ASSET = {
    type: DiscriminatorContentType.ASSET,
    displayName: "Asset ContentType",
    id: "123",
    filter: CORRECT_CONTENT_TYPE_ASSET_FILTER
}

const CORRECT_CONTENT_TYPE_COMPLEX:ContentTypeComplex = {
    type: DiscriminatorContentType.COMPLEX,
    definition: {
        name: {
            type: DiscriminatorFieldType.STRING,
        }
    }
}

const WRONG_CONTENT_TYPE_COMPLEX = {
    type: DiscriminatorContentType.COMPLEX,
    definition: {
        a: 1
    }
}

describe("ContentType typeguard tests", () => {
    test("Testing wrong ContentType with isContentType", async () => {
        return expect(isContentType(WRONG)).toBe(false);
    })

    test("Testing wrong ContentType with isContentTypeAsset", async () => {
        return expect(isContentTypeAsset(WRONG)).toBe(false);
    })

    test("Testing wrong ContentType with isContentTypeComplex", async () => {
        return expect(isContentTypeComplex(WRONG)).toBe(false);
    })

    test("Testing proper ContentTypeAssetFilter", async () => {
        return expect(isContentTypeAssetFilter(CORRECT_CONTENT_TYPE_ASSET_FILTER)).toBe(true);
    })

    test("Testing wrong ContentTypeAssetFilter", async () => {
        return expect(isContentTypeAssetFilter(WRONG)).toBe(false);
    })

    test("Testing proper ContentTypeAsset with isContentTypeAsset", async () => {
        return expect(isContentTypeAsset(CORRECT_CONTENT_TYPE_ASSET)).toBe(true);
    })

    test("Testing proper ContentTypeComplex with isContentTypeComplex", async () => {
        return expect(isContentTypeComplex(CORRECT_CONTENT_TYPE_COMPLEX)).toBe(true);
    })

    test("Testing wrong ContentTypeComplex with isContentType", async () => {
        return expect(isContentType(WRONG_CONTENT_TYPE_COMPLEX)).toBe(false);
    })

    test("Testing wrong ContentTypeComplex with isContentTypeComplex", async () => {
        return expect(isContentTypeComplex(WRONG_CONTENT_TYPE_COMPLEX)).toBe(false);
    })
});