import {Position} from "../models/models"

export interface State {
    runnerPositions?: Position[];
    paragraph?: string;
}

const initialState: State = {
    runnerPositions: [],
    paragraph: ''
};

export class Store {
    state: State;

    constructor(initialState: State) {
        this.state = initialState;
    }

    setState(newState: Partial<State>) {
        this.state = {...this.state, ...newState};
    }
}

export const store = new Store(initialState);
