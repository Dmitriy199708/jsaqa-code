const { chromium } = require("playwright");
const { test, expect } = require("@playwright/test");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 3000,
    devtools: true
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru");
  await page.click("text=Каталог курсов");
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.pause();

  //assertion
  await browser.close();
})();
