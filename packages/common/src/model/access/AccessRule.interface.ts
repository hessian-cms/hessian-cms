import { DisplayNamed } from "../common";
import { ComplexAccessRule } from "./ComplexAccessRule.type";

export default interface AccessRule<T> extends DisplayNamed {
    permitAttributes?: string[],
    denyAttributes?: string[],
    rule?: ComplexAccessRule<T>
}