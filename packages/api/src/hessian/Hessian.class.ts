import { ContentType, ContentTypeCollection, isContentType } from "@hessian-cms/common";
import { PersistenceManager } from "./persistence";
import { HessianErrorNotValidContentType } from "./errors/HessianErrorNotValidContentType.error";

export class Hessian {
    constructor(private persistenceManager: PersistenceManager) { }

    async registerContentType(slug: string, contentType: unknown): Promise<string> {
        if (isContentType(contentType)) {
            return await this.persistenceManager.registerContentType(slug, contentType);
        }
        throw new HessianErrorNotValidContentType("ContentType not proper");
    }

    async getContentType(slug: string): Promise<ContentType> {
        return await this.persistenceManager.getContentType(slug);
    }

    async getAllContentTypes(): Promise<ContentTypeCollection> {
        return await this.persistenceManager.getAllContentTypes();
    }

    async updateContentType(slug: string, contentType: unknown): Promise<ContentType> {
        if (isContentType(contentType)) {
            return await this.persistenceManager.updateContentType(slug, contentType);
        }
        throw new HessianErrorNotValidContentType("Not implemented");
    }

    async removeContentType(slug: string): Promise<string> {
        return await this.persistenceManager.removeContentType(slug);
    }
}