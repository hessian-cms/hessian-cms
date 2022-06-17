import { MimeType } from "./MimeType.type";

export interface Asset {
    filename: string,
    mimetype: MimeType,
    location: string
}