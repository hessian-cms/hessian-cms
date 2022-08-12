import { FieldTypeValidationError } from "./FieldTypeValidationError.error";

/**
 * Field type error for string values
 */
export class FieldTypeValidationErrorString extends FieldTypeValidationError {
    constructor(path: string[], msg: string, public value?: string) {
        super(path, msg);
    }
}