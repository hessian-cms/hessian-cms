import { ContentType } from "../model";

export interface ContentTypeManager<T = any> {
    clean(): Promise<ContentTypeManager<T>>,
    createContent(content: T): Promise<T>,
    update(contentType: ContentType): Promise<ContentTypeManager<T>>,
    getContent(id: string): Promise<T>,
    updateContent(id: string, content: T): Promise<T>,
    deleteContent(id: string): Promise<"OK">
}