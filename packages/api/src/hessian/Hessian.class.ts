import { HessianConfiguration } from "./HessianConfiguration.interface";
import { ContentType } from "@hessian-cms/common";
import { ContentTypeManager } from "./ContentTypeManager.class";

export class Hessian {
    constructor(private config: HessianConfiguration) { }

    createContentType(name: string, contentType: ContentType):Promise<string> {
        return new Promise<string>(()=>{})
    }

    getContentType(name:string): Promise<ContentTypeManager> {
        return new Promise<ContentTypeManager>(()=>{})
    }

    removeContentType(name:string):Promise<string> {
        return new Promise<string>(()=>{})
    }

    alterContentType(name:string, contentType:ContentType): Promise<string> {
        return new Promise<string>(()=>{})
    }
}