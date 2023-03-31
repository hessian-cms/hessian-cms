import { ContentType, ContentTypeSchema } from "../../model";
import { ContentTypeManager } from "../ContentTypeManager.interface";
import { Repository } from "../Repository.interface";
import { HessianError } from "../errors";
import { InMemoryContainer } from "./InMemoryContainer.interface";
import { InMemoryContentTypeManager } from "./InMemoryContentTypeManager.class";

type InMemoryContentTypes = InMemoryContainer<ContentTypeManager>;

export class InMemoryRepository implements Repository {
    private contentTypes: InMemoryContentTypes = {}

    async clean(): Promise<Repository> {
        this.contentTypes = {};
        return this;
    }

    async createContentType<T = any>(typeSlug: string, contentType: ContentType): Promise<ContentTypeManager<T>> {
        if (this.contentTypes[typeSlug] !== undefined) {
            throw new HessianError(`ContentType ${typeSlug} already exists.`)
        }

        this.contentTypes[typeSlug] = new InMemoryContentTypeManager(ContentTypeSchema.parse(contentType));

        return this.contentTypes[typeSlug];
    }

    async getContentType<T = any>(typeSlug: string): Promise<ContentTypeManager<T>> {
        if (this.contentTypes[typeSlug]) {
            throw new HessianError("ContentType for slug not available");
        }
        return this.contentTypes[typeSlug];
    }

    async deleteContentType(typeSlug: string): Promise<"OK"> {
        if (delete this.contentTypes[typeSlug]) {
            return "OK";
        }

        throw new HessianError(`Couldn't delete ${typeSlug} from repository.`)
    }
}

