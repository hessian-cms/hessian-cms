import { Hessian, PersistenceManagerInMemory, PersistenceManagerErrorContentTypeNotExists } from "../src/hessian";

describe("Hessian API test", () => {
    test("Test 1", () => {
        expect(true).toBe(true);
    })

    test("Basic test creating hessian with in memory persistence manager", async () => {
        const pm = new PersistenceManagerInMemory();
        const hessian = new Hessian(pm);
        return expect(hessian.getContentType("wrong")).rejects.toBeInstanceOf(PersistenceManagerErrorContentTypeNotExists);
    })

    test("Basic test creating hessian with in memory persistence manager without any ContentTypes", async () => {
        const pm = new PersistenceManagerInMemory();
        const hessian = new Hessian(pm);
        return expect(hessian.getAllContentTypes()).resolves.toEqual({});
    })
})