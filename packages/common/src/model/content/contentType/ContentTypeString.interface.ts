import { ContentTypeCommon } from "./ContentTypeCommon.interface";

export interface ContentTypeString extends ContentTypeCommon<string> {
    type: "string"
}