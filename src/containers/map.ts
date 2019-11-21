import {State, store} from "../state/state";

export class AppMap extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});

        shadowRoot.innerHTML = this.render();

        window.setTimeout(() => {
            const newState: State = {
                runnerPositions: [
                    {latitude: 54, longitude: 31},
                    {latitude: 57, longitude: 46}
                ]
            };
            store.setState(newState);
            shadowRoot.innerHTML = this.render();
        }, 1000);

        window.setTimeout(() => {
            const newState: State = {paragraph: 'A changed string'};
            store.setState(newState);
            shadowRoot.innerHTML = this.render();
        }, 2000)
    }

    render() {
        return `
            <p>${store.state.paragraph}</p>
            <ul>${store.state.runnerPositions.map(position => {
            return `<li >${position.latitude}; ${position.longitude}</li>`
        })}</ul>
        `
    }
}

window.customElements.define('app-map', AppMap);
