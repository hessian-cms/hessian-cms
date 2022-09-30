import { DiscriminatorContentType } from "../contentType";

export interface ContentCommon {
    id?: string
    type: DiscriminatorContentType
}