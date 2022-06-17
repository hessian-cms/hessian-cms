import { ContentTypeAsset } from "@hessian-cms/common";
import { ContentTypeValidationErrorAsset } from "./errors";

export const validateContentTypeAsset = async (content: any, contentType: ContentTypeAsset): Promise<boolean> => {
    throw new ContentTypeValidationErrorAsset("'validateContentTypeAsset' not implemented yet")
}