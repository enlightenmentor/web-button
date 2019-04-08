import { html, css, LitElement } from 'lit-element';

export default class WebButton extends LitElement {
  static get version() { return '0.0.1' }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
    `;
  }

  static get properties() {
    return {}
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <button>
        <slot>Button</slot>
      </button>
    `;
  }
}
