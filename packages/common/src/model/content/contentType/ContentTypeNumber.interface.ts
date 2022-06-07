import { ContentTypeCommon } from "./ContentTypeCommon.interface";

export interface ContentTypeNumber extends ContentTypeCommon<number> { 
    type: "string",
    from?: number,
    to?: number,
}