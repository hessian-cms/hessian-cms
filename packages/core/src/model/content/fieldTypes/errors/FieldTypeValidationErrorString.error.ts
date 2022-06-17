import { FieldTypeValidationError } from "./FieldTypeValidationError.error";

export class FieldTypeValidationErrorString extends FieldTypeValidationError {
    constructor(path: string[], msg: string, public value?: string) {
        super(path, msg);
    }
}