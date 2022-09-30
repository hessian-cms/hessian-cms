import { optionalArrayOf, optionalTypeOf } from "../../helper";
import { ContentTypeAssetFilter } from "../ContentTypeAssetFilter.interface";

export const isContentTypeAssetFilter = (contentTypeAssetFilter: unknown): contentTypeAssetFilter is ContentTypeAssetFilter => {
    const {
        allowedFilenames, 
        allowedMimeTypes, 
        condition, 
        regExpFilename, 
        regExpMimeType, 
        sizeFrom, 
        sizeTo 
    } = contentTypeAssetFilter as ContentTypeAssetFilter;

    if(!optionalTypeOf(allowedFilenames, "string")) {
        return false;
    }

    if(!optionalArrayOf(allowedMimeTypes, "string")) {
        return false;
    }
    
    if(!optionalTypeOf(condition, "function")) {
        return false;
    }
    
    if(regExpFilename) {
        if(!(regExpFilename instanceof RegExp)) {
            return false;
        }
    }
    
    if(regExpMimeType) {
        if(!(regExpFilename instanceof RegExp)) {
            return false;
        }
    }

    if(!optionalTypeOf(sizeFrom, "number")) {
        return false;
    }

    if(!optionalTypeOf(sizeTo, "number")) {
        return false;
    }

    return true;
}