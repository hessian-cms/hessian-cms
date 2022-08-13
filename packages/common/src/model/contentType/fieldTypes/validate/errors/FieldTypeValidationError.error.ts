/**
 * Default Field Type Validation Error
 */
export class FieldTypeValidationError extends Error {
    constructor(public path:string[], msg:string) {
        super(msg);
    }

    /**
     * Returns path of field in object
     * 
     * @returns string - object path
     */
    getPath():string {
        return this.path.join(".")
    }
}