import { StateTransitions } from "./StateTransitions.interface"

export interface State {
    displayName?:string,
    transitions: StateTransitions
}