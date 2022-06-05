export interface Subject<T = any> {
    name: string,
    attributes?: string[],
    meta: T
}