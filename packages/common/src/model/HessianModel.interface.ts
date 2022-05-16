import { AccessRules } from "./access";
import { Processes } from "./process";

export interface HessianModel {
    accessRules: AccessRules,
    process: Processes
}