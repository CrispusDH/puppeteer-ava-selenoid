import anyTest, { TestInterface } from 'ava';
import * as puppeteer from 'puppeteer';

const test = anyTest as TestInterface<{browser: puppeteer.Browser}>;
// tslint:disable
test.beforeEach('Setup browser', async t => {
  t.context.browser = await puppeteer.launch(
    {
      headless: true,
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
  t.is(title, 'Google');
});

test('Check title #2', async t => {
  const browser = t.context.browser;
  const pages = await browser.pages();
  const page = pages[0];
  await page.goto('https://google.com');
  const title = await page.title();
  t.is(title, 'Google');
});

test('Check title #3', async t => {
  const browser = t.context.browser;
  const pages = await browser.pages();
  const page = pages[0];
  await page.goto('https://google.com');
  const title = await page.title();
  t.is(title, 'Google');
});
