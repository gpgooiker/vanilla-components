import {styleConfig} from "../../style/config";

class AppButton extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});

        shadowRoot.innerHTML = `
            <style>
                .button {
                    background: ${styleConfig.buttonColor};
                    padding: 10px 20px;
                    display: inline-block;
                    border: none;
                    font-size: ${styleConfig.fontSize};
                }
            </style>
            <button class="button">
                <slot></slot>
            </button>
        `;
    }
}

window.customElements.define('app-button', AppButton);
