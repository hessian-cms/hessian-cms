import { DisplayNamed, WithId } from "../common";
import { DiscriminatorContentType } from "./DiscriminatorContentType.type";
import { Tag } from "./Tag.interface";

export interface ContentTypeCommon extends WithId<string>, DisplayNamed {
    type: DiscriminatorContentType,
    tags?: Tag[]
}