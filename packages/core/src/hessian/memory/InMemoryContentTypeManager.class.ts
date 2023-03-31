import { ContentType, getFieldTypeValidator } from "../../model";
import { ContentTypeManager } from "../ContentTypeManager.interface";
import { HessianError } from "../errors";

export class InMemoryContentTypeManager<T = any> implements ContentTypeManager<T> {
    private contents: any[] = [];

    constructor(private contentType: ContentType) { }

    async clean(): Promise<ContentTypeManager<T>> {
        this.contents = [];
        return this;
    }

    async createContent(content: T): Promise<T> {
        try {
            const parsedContent:T = getFieldTypeValidator(this.contentType.definition).parse(content);
            this.contents.push(parsedContent);
            return content;
        } catch(e) {
            throw new HessianError(`Parser error for given content.`)
        }
    }

    async update(contentType: ContentType): Promise<ContentTypeManager<T>> {
        throw new Error("Method not implemented.");
    }

    async getContent(id: string): Promise<T> {
        const numId = await getValidId(id, this.contents);

        return this.contents[numId];
    }

    async updateContent(id: string, content: T): Promise<T> {
        const numId = await getValidId(id, this.contents);

        this.contents[numId] = content;

        return content;
    }

    async deleteContent(id: string): Promise<"OK"> {
        throw new Error("Method not implemented.");
    }
}

async function getValidId(id: string, contents: any[]): Promise<number> {
    const numId: number = parseInt(id);

    if (isNaN(numId)) {
        throw new HessianError(`Given ID '${id}' is not a number.`);
    }

    if (numId < contents.length) {
        throw new HessianError(`Given ID '${id}' out of range.`);
    }

    return numId;
}