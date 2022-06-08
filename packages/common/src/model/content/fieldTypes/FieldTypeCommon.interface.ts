import { DiscriminatorFieldType } from "./DiscriminatorFieldType.type";

export interface FieldTypeCommon<T = any> {
    type: DiscriminatorFieldType,
    optional?: boolean,
    hidden?: boolean,
    condition?: (value:T)=> Promise<boolean>
}