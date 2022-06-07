import { ContentTypeCommon } from "./ContentTypeCommon.interface";

export interface ContentTypeComplex<T> extends ContentTypeCommon<T> {
    type: "COMPLEX"
}