import anyTest, { TestInterface } from 'ava';
import * as puppeteer from 'puppeteer';
import axios from 'axios';

const test = anyTest as TestInterface<{browser: puppeteer.Browser}>;
// tslint:disable
test.beforeEach('Setup browser', async t => {
  const selenoidUrl = '127.0.0.1';
  const { data } = await axios.post(
    `http://${selenoidUrl}:4444/wd/hub/session`,
    {
      "desiredCapabilities":
        {
          browserName: "chrome",
          "selenoid:options": {
            sessionTimeout: '3m',
            enableVnc: true
          }
        }
    }
  );
  const sessionId = data.sessionId;
  await new Promise(resolve => setTimeout(resolve, 5000));

  t.context.browser = await puppeteer.connect(
    { browserWSEndpoint: `ws://${selenoidUrl}:4444/devtools/${sessionId}` }
  );
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
