import { DiscriminatorFieldType } from "./DiscriminatorFieldType.type";

export interface FieldTypeCommon<T = any> {
    type: DiscriminatorFieldType,
    hidden?: boolean,
    condition: (value:T)=> Promise<boolean>
}