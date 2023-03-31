export interface ContentTypeManager<T = any> {
    clean(): Promise<ContentTypeManager<T>>,
    createContent(): Promise<T>,
    getContent(id: string): Promise<T>,
    updateContent(id: string, content: T): Promise<T>,
    deleteContent(id: string): Promise<"OK">
}