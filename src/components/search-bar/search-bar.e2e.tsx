import { newE2EPage } from '@stencil/core/testing';

describe('ifx-search-bar', () => {
  it('emits search event on input', async () => {
    const page = await newE2EPage();
    await page.setContent('<ifx-search-bar></ifx-search-bar>');

    const input = await page.waitForSelector('.search-bar input');
    await input.type('query');
    const event = await page.waitForEvent('search');
    expect(event).not.toBeNull();
  });
});
