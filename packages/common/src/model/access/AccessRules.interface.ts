import { Declaration } from "../common/Declaration.interface";
import AccessRule from "./AccessRule.interface";
import { AccessRuleName } from "./AccessRuleName.type";

export interface AccessRules extends Declaration<AccessRule<any>> {
}