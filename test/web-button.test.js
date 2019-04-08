import { html, fixture, expect } from '@open-wc/testing';

import '../src/web-button.js';

describe('<web-button>', () => {
  it('has a default slot text', async () => {
    const textContent = 'Button';
    const el = await fixture('<web-button></web-button>');
    expect(el).shadowDom.to.equal(`<button><slot>${textContent}</slot></button>`);
  });
});
