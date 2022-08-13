import { ContentType } from "@hessian-cms/common";

export class HessianContentTypeManager {
    constructor() {
        this.getContentType = this.getContentType.bind(this);
        this.addContent = this.addContent.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.deleteContent = this.deleteContent.bind(this);
    }

    private getContentType():Promise<ContentType> {
        // TODO: implement
        return new Promise<ContentType>(()=>{})
    }

    addContent(content:unknown):Promise<"OK"> {
        // TODO: implement
        return new Promise<"OK">(()=>{})
    }

    getContent():Promise<any> {
        // TODO: implement
        return new Promise<any>(()=>{})
    }

    updateContent(id:string, content:unknown):Promise<any> {
        // TODO: implement
        return new Promise<any>(()=>{})
    }
    
    deleteContent(id:string):Promise<"OK"> {
        // TODO: implement
        return new Promise<"OK">(()=>{})
    }
}