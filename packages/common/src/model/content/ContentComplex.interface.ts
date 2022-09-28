import { DiscriminatorContentType } from "../contentType";
import { ContentCommon } from "./ContentCommon.interface";

export interface ContentComplex extends ContentCommon {
    type: DiscriminatorContentType.COMPLEX
    object: unknown
}