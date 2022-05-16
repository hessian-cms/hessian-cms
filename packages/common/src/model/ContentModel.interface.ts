import { AccessRules } from "./access";
import { Processes } from "./process";

export interface ContentModel {
    accessRules: AccessRules,
    process: Processes
}