import { ContentType } from "../model";
import { ContentTypeManager } from "./ContentTypeManager.interface";

export interface Repository {
    clean(): Promise<Repository>,
    createContentType(typeSlug: string, contentType: ContentType): Promise<ContentTypeManager>,
    getContentType(typeSlug: string): Promise<ContentTypeManager>,
    updateContentType(typeSlug: string): Promise<ContentTypeManager>,
    deleteContentType(typeSlug: string): Promise<"OK">,
}