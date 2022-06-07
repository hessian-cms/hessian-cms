import { ContentTypeComplex } from "@hessian-cms/common";

export interface Person {
    name: string,
    forename: string,
    age: number
}

export const SIMPLE_COMPLEX_CONTENT_MODEL:ContentTypeComplex = {
    type: "COMPLEX",
    displayName: "Simple complex ContentType",
    definition: {
        name: {type:"STRING"},
        forename: {type: "STRING"},
        age: {type: "NUMBER", from: 0, to: 100}
    }
}

export const SIMPLE_COMPLEX_CONTENT_MODEL_DATA_CORRECT:Person = {
    name: "Dampf",
    forename: "Hans",
    age: 123
}

export const SIMPLE_COMPLEX_CONTENT_MODEL_DATA_WRONG:any = {
    name: "Dampf",
    forename: "Hans",
    age: "123"
}