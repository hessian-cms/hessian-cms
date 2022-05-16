import AccessRule from "./AccessRule.interface";
import { AccessRuleName } from "./AccessRuleName.type";

export interface AccessRules {
    [ruleName: AccessRuleName]: AccessRule<any>
}