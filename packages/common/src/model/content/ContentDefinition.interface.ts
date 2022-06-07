import { DisplayNamed, WithId } from "../common";
import { ContentType } from "./contentType";

export interface ContentDefinition extends DisplayNamed, WithId<string> {
    definition: { [field: string]: ContentType }
}