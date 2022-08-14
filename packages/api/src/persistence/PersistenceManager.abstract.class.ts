import { ContentType } from "@hessian-cms/common";

export abstract class PersistenceManager {
    constructor() {
        this.registerContentType = this.registerContentType.bind(this);
        this.getContentType = this.getContentType.bind(this);
        this.getAllContentTypes = this.getAllContentTypes.bind(this);
        this.updateContentType = this.updateContentType.bind(this);
        this.removeContentType = this.removeContentType.bind(this);
    }

    abstract registerContentType(slug:string, contentType:ContentType):Promise<ContentType>
    abstract getContentType(slug:string): Promise<ContentType>
    abstract getAllContentTypes(): Promise<ContentType[]>
    abstract updateContentType(slug:string, contentType:ContentType): Promise<ContentType>
    abstract removeContentType(slug:string): Promise<string>
}