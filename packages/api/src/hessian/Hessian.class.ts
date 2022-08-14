import { ContentType } from "@hessian-cms/common";
import { PersistenceManager } from "../persistence";
import { HessianContentTypeManager } from "./HessianContentTypeManager.class";

export class Hessian {
    constructor(private config: PersistenceManager) { }

    createContentType(name: string, contentType: ContentType):Promise<string> {
        return new Promise<string>(()=>{})
    }

    getContentType(name:string): Promise<HessianContentTypeManager> {
        return new Promise<HessianContentTypeManager>(()=>{})
    }

    removeContentType(name:string):Promise<string> {
        return new Promise<string>(()=>{})
    }

    alterContentType(name:string, contentType:ContentType): Promise<string> {
        return new Promise<string>(()=>{})
    }
}