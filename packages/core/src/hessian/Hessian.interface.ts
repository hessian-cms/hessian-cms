import { Repository } from "./Repository.interface";

export interface Hessian {
    repository(name: string): Repository,
}