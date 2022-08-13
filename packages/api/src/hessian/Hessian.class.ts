import { HessianConfiguration } from "./HessianConfiguration.interface";
import { ContentType } from "@hessian-cms/common";
import { HessianContentTypeManager } from "./HessianContentTypeManager.class";

export class Hessian {
    constructor(private config: HessianConfiguration) { }

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