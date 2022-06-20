export class FieldTypeValidationError extends Error {
    constructor(public path:string[], msg:string) {
        super(msg);
    }

    getPath():string {
        return this.path.join(".")
    }
}