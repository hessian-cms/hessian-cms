import { DiscriminatorContentType } from "./DiscriminatorContentType.enum";
import { Tag } from "./Tag.interface";

/**
 * Common interface to be implemented by every ContentType. Must make Use of id with optional display naming
 */
export interface ContentTypeCommon {
    id?: string

    /**
     * Display name to be shown when listed
     * @defaultValue `undefined`
     */
    displayName?: string

    /**
     * Discriminator
     */
    type: DiscriminatorContentType,
    /**
     * Tags
     */
    tags?: Tag[]
}