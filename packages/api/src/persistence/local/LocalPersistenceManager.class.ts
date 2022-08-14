import { ContentType } from "@hessian-cms/common";
import { PersistenceManager } from "../PersistenceManager.abstract.class";

const CONTENT_TYPES_FILENAME = "hessian.types.json"

export class LocalPersistenceManager extends PersistenceManager {
    private path2ContentTypes: string = this.path + this.path.endsWith("/") ? "" : "/" + CONTENT_TYPES_FILENAME;
    private contentTypes: ContentType[] = [];
    constructor(private path: string) {
        super();
    }


    registerContentType(slug: string, contentType: ContentType): Promise<ContentType> {
        throw new Error(`Method not implemented.${slug}${contentType}`);
    }
    getContentType(slug: string): Promise<ContentType> {
        throw new Error(`Method not implemented.${slug}`);
    }
    getAllContentTypes(): Promise<ContentType[]> {
        throw new Error("Method not implemented.");
    }
    updateContentType(slug: string, contentType: ContentType): Promise<ContentType> {
        throw new Error(`Method not implemented.${slug}${contentType}`);
    }
    removeContentType(slug: string): Promise<string> {
        throw new Error(`Method not implemented.${slug}`);
    }

}