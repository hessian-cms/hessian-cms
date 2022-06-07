export interface ContentTypeCommon<T = any> {
    type: string,
    hidden?: boolean,
    condition: (value:T)=> Promise<boolean>
}