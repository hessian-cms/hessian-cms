import { ZodError } from "zod";
import { ContentType, ContentTypeManager, ContentTypeSchema, Hessian, HessianError, InMemoryHessian, Repository } from "../src";
import CONTENT_MODEL from "./fixtures/person.contentmodel.json";
import CONTENT from "./fixtures/person.data.json";

describe("InMemoryHessian tests", () => {
    test("InMemoryHessian test proper person insert", async () => {
        const contentType: ContentType = ContentTypeSchema.parse(CONTENT_MODEL);
        const hessian: Hessian = new InMemoryHessian();
        const repo: Repository = hessian.repository("test");
        const ctm: ContentTypeManager = await repo.createContentType("person", contentType);

        expect(await ctm.createContent(CONTENT)).toEqual(CONTENT);
    })

    test("InMemoryHessian test invalid person insert", async () => {
        expect.assertions(1);

        const contentType: ContentType = ContentTypeSchema.parse(CONTENT_MODEL);
        const hessian: Hessian = new InMemoryHessian();
        const repo: Repository = hessian.repository("test");
        const ctm: ContentTypeManager = await repo.createContentType("person", contentType);

        const INVALID_CONTENT = { a: 1 };

        expect(ctm.createContent(INVALID_CONTENT)).rejects.toBeInstanceOf(HessianError);
    })
});