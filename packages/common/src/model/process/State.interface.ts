import { StateTransition } from "./StateTransition.interface"

export interface State {
    displayName?:string,
    transitions: StateTransition[]
}