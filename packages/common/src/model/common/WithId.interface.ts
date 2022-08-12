/**
 * Generic interface for IDs
 * 
 * @typeParam T - Any type to `number`oder `string`
 * @internal
 */
export interface WithId<T extends number | string> {
    id?: T
}