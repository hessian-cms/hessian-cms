import { DiscriminatorFieldType } from "./DiscriminatorFieldType.enum";

/**
 * Common interface to be impleneted in every FieldType
 */
export interface FieldTypeCommon<T = any> {
    type: DiscriminatorFieldType,
    optional?: boolean,
    hidden?: boolean,
    condition?: (value:T)=> Promise<boolean>
}