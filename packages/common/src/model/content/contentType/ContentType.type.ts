import { ContentTypeBoolean } from "./ContentTypeBoolean.interface";
import { ContentTypeComplex } from "./ContentTypeComplex.interface";
import { ContentTypeNumber } from "./ContentTypeNumber.interface";
import { ContentTypeString } from "./ContentTypeString.interface";

export type ContentType =
    ContentTypeString |
    ContentTypeNumber |
    ContentTypeBoolean |
    ContentTypeComplex;