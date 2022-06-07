import { ContentTypeCommon } from "./ContentTypeCommon.interface";

export interface ContentTypeFile extends ContentTypeCommon {
    type: "FILE",
}