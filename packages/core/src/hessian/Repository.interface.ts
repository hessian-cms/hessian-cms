import { ContentType } from "../model";
import { ContentTypeManager } from "./ContentTypeManager.interface";

export interface Repository {
    clean(): Promise<Repository>,
    createContentType<T = any>(typeSlug: string, contentType: ContentType): Promise<ContentTypeManager<T>>,
    getContentType(typeSlug: string): Promise<ContentTypeManager>,
    deleteContentType(typeSlug: string): Promise<"OK">,
}