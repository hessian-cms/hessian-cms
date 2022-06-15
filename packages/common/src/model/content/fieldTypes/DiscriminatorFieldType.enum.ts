/**
 * Discriminator for type of field
 */
export enum DiscriminatorFieldType {
    STRING = "STRING",
    BOOLEAN = "BOOLEAN",
    NUMBER = "NUMBER",
    COMPLEX = "COMPLEX"
}

export const FIELD_TYPES: DiscriminatorFieldType[] = [
    DiscriminatorFieldType.STRING, 
    DiscriminatorFieldType.BOOLEAN, 
    DiscriminatorFieldType.NUMBER, 
    DiscriminatorFieldType.COMPLEX
];