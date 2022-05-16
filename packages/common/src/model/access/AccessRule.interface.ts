import { ComplexAccessRule } from "./ComplexAccessRule.type";

export default interface AccessRule<T> {
    displayName?: string,
    permitAttributes?: string[],
    denyAttributes?: string[],
    rule?: ComplexAccessRule<T>
}