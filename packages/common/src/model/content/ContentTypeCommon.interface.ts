import { DisplayNamed, WithId } from "../common";
import { DiscriminatorContentType } from "./DiscriminatorContentType.type";
import { Tag } from "./Tag.interface";

export interface ContentTypeCommon<T = any> extends WithId<string>, DisplayNamed{
    type: DiscriminatorContentType,
    meta: T,
    tags?: Tag[]
}