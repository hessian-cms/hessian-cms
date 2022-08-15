import { ContentType, ContentTypeCollection } from "@hessian-cms/common";
import { PersistenceManagerErrorContentTypeAlreadyExists, PersistenceManagerErrorContentTypeNotExists } from "../errors";
import { PersistenceManager } from "../PersistenceManager.abstract.class";

export class PersistenceManagerInMemory extends PersistenceManager {
    private contentTypes:ContentTypeCollection = {};

    async registerContentType(slug: string, contentType: ContentType): Promise<string> {
        if(this.contentTypes[slug] !== undefined) {
            throw new PersistenceManagerErrorContentTypeAlreadyExists(`ContentType for ${slug} already exists`);
        }
        this.contentTypes[slug] = contentType;
        return slug;
    }

    async getContentType(slug: string): Promise<ContentType> {
        if(this.contentTypes[slug] === undefined) {
            throw new PersistenceManagerErrorContentTypeNotExists(`ContentType for ${slug} doesn't exist`)
        }
        return this.contentTypes[slug];
    }

    async getAllContentTypes(): Promise<ContentTypeCollection> {
        return this.contentTypes;
    }

    async updateContentType(slug: string, contentType: ContentType): Promise<ContentType> {
        if(this.contentTypes[slug] === undefined) {
            throw new PersistenceManagerErrorContentTypeNotExists(`ContentType for ${slug} doesn't exist`)
        }
        this.contentTypes[slug] = contentType;
        return this.contentTypes[slug];
    }
    
    async removeContentType(slug: string): Promise<string> {
        if(this.contentTypes[slug] === undefined) {
            throw new PersistenceManagerErrorContentTypeNotExists(`ContentType for ${slug} doesn't exist`)
        }
        delete this.contentTypes[slug];
        return slug;
    }
}