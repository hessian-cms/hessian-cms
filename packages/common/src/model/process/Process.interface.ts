import { DisplayNamed } from "../common";
import { Declaration } from "../common/Declaration.interface";
import { State } from "./State.interface";

export interface Process extends DisplayNamed{
    states: Declaration<State>
}