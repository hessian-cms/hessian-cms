import { ContentTypeComplex } from "./ContentTypeComplex.interface";
import { ContentTypeFile } from "./ContentTypeFile.interface";

export type ContentType<T = any> = ContentTypeComplex | ContentTypeFile;