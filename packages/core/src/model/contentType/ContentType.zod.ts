import { z } from "zod";

export const ContentTypeSchema = z.object({
    maxEntries: z.number().optional(),
    definition: z.discriminatedUnion("type",[
        z.object({
            type: z.literal("string"),
        }),
        z.object({
            type: z.literal("number"),
            min: z.number().optional(),
            max: z.number().optional()
        })
    ])
})

export type ContentType = z.infer<typeof ContentTypeSchema>;