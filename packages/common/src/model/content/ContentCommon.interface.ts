import { WithId } from "../common";
import { DiscriminatorContentType } from "../contentType";

export interface ContentCommon extends WithId<string> {
    type: DiscriminatorContentType
}