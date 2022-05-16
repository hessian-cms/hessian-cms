import { Declaration } from "../common/Declaration.interface";
import { State } from "./State.interface";

export interface Process {
    displayName?: string,
    states: Declaration<State>
}