const { test } = require('@playwright/test');

test('Capture screenshot of the entire scrollable webpage', async ({page}) => {

    await page.goto('https://myifew.com/')
    await page.screenshot({path: 'screenshot/fullPage.png', fullPage: true, timeout: 100000})
  })
