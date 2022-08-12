import { MimeType } from "./MimeType.type";

/**
 * Interface providing asset informations
 * @public
 */
export interface Asset {
    /**
     * Filename to be used for download
     */
    filename: string,
    /**
     * Mime-Type of Asset
     */
    mimetype: MimeType,
    /**
     * Absolute path where asset is located
     */
    location: string
}