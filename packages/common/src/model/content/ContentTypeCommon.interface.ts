import { DisplayNamed, WithId } from "../common";
import { DiscriminatorContentType } from "./DiscriminatorContentType.type";
import { Tag } from "./Tag.interface";

/**
 * Common interface to be implemented by every ContentType. Must make Use of id with optional display naming
 */
export interface ContentTypeCommon extends WithId<string>, DisplayNamed {
    type: DiscriminatorContentType,
    tags?: Tag[]
}