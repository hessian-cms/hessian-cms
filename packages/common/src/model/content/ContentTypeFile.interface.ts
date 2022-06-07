import { ContentTypeCommon } from "./ContentTypeCommon.interface";

export interface ContentTypeFile<T> extends ContentTypeCommon<T> {
    type: "FILE",
}