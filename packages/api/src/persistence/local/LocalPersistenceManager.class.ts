import { ContentType, validateContentType } from "@hessian-cms/common";
import { existsSync, readFileSync } from "fs";
import { PersistenceManager } from "../PersistenceManager.abstract.class";

const CONTENT_TYPES_FILENAME: string = "hessian.types.json"

export class LocalPersistenceManager extends PersistenceManager {
    private path2ContentTypes: string = this.path + this.path.endsWith("/") ? "" : "/" + CONTENT_TYPES_FILENAME;
    private contentTypes: ContentType[] = [];
    constructor(private path: string) {
        super();

        this.load = this.load.bind(this);
        this.load();
    }

    private load() {
        if (existsSync(this.path2ContentTypes)) {
            const contentTypesFromFile = JSON.parse(readFileSync(this.path2ContentTypes).toString());
            if (contentTypesFromFile instanceof Array) {
                
            }
        }
    }

    registerContentType(slug: string, contentType: ContentType): Promise<ContentType> {
        throw new Error("Method not implemented.");
    }
    getContentType(slug: string): Promise<ContentType> {
        throw new Error("Method not implemented.");
    }
    getAllContentTypes(): Promise<ContentType[]> {
        throw new Error("Method not implemented.");
    }
    updateContentType(slug: string, contentType: ContentType): Promise<ContentType> {
        throw new Error("Method not implemented.");
    }
    removeContentType(slug: string): Promise<string> {
        throw new Error("Method not implemented.");
    }

}