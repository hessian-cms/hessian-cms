import { DisplayNamed } from "../common";
import { ComplexAccessRule } from "./ComplexAccessRule.type";

export type AccessRuleType = "PERMIT" | "DENY";

export interface AccessRule<T> extends DisplayNamed {
    type: AccessRuleType
    attributes?: string[],
    rule?: ComplexAccessRule<T>
}