import { ContentType, ContentTypeComplex } from "@hessian-cms/common";
import { validateFieldType } from "./fieldTypes/validateFieldType.function";

export const validateContentType = async (content: any, contentType: ContentType): Promise<boolean> => {
        switch (contentType.type) {
            case "COMPLEX": return await validateContentTypeComplex(content, contentType); break;
            case "ASSET": throw new Error("Not implemented"); break;
            default: throw new Error("Unkown Error");
        }
}

export const validateContentTypeComplex = async (content: any, contentType: ContentTypeComplex) => {
    if(typeof content !== 'object') {
        return false;
    }

    const keys:string[] = Object.keys(contentType.definition);
    
    for(let key of keys) {
        if(!await validateFieldType(content[key], contentType.definition[key])) {
            return false;
        }
    }

    return true;
}