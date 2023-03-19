import { z } from "zod";

export const ContentTypeDefinitionSchema = z.object({
    
})

export type ContentTypeDefinition = z.infer<typeof ContentTypeDefinitionSchema>;