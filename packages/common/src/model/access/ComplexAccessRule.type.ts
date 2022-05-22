import { Subject } from "./Subject.interface";

export type ComplexAccessRule<T> = (subject: Subject, object: T, env?:any) => Promise<boolean>