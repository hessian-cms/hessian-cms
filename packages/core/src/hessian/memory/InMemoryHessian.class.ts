import { Hessian } from "../Hessian.interface";
import { Repository } from "../Repository.interface";
import { InMemoryContainer } from "./InMemoryContainer.interface"
import { InMemoryRepository } from "./InMemoryRepository.class";

type InMemoryRepositories = InMemoryContainer<Repository>;

export class InMemoryHessian implements Hessian {
    private repositories: InMemoryRepositories = {};

    repository(name: string): Repository {
        if(this.repositories[name] === undefined) {
            this.repositories[name] = new InMemoryRepository();
        }
        
        return this.repositories[name];
    }
}