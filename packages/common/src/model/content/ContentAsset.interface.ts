import { DiscriminatorContentType } from "../contentType";
import { ContentCommon } from "./ContentCommon.interface";

export interface ContentAsset extends ContentCommon {
    type: DiscriminatorContentType.ASSET
}