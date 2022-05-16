import { ComplexAccessRule } from "./ComplexAccessRule.type";

export default interface AccessRule<T> {
    permit?: string[],
    deny?: string[],
    rule?: ComplexAccessRule<T>
}