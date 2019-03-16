import anyTest, { TestInterface } from 'ava';
import * as puppeteer from 'puppeteer';

const test = anyTest as TestInterface<{browser: puppeteer.Browser}>;
// tslint:disable
test.beforeEach('Setup browser', async t => {
  t.context.browser = await puppeteer.launch(
    {
      headless: false,
      defaultViewport: {
        width: 1366,
        height:766
      }
    });
});

test.afterEach('Tear down', async t => {
  await t.context.browser.close();
});

test('Check title #1', async t => {
  const browser = t.context.browser;
  const pages = await browser.pages();
  const page = pages[0];
  await page.goto('https://google.com');
  const title = await page.title();
  await new Promise(resolve => setTimeout(resolve, 4000));
  t.is(title, 'Google');
});
