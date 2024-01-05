import { test, expect } from "@playwright/test";
let page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.fill("#username", "rahulshettyacademy");
  await page.fill("[name='password']", "learning");
  await page.locator("select[class='form-control']").selectOption("Teacher");
  await page.check("#terms");
  await page.click("#signInBtn");
  await page.waitForTimeout(5000);
});
test("Add Items to the Cart", async () => {
  await page.click("//a[normalize-space()='Shop']");
  await page.waitForTimeout(3000);
  const itemNames = await page.$$(".card-title a");
  for (const itemName of itemNames) {
    const item = await itemName.textContent();
    console.log(item);
    if (await item == "Nokia Edge") {
      await page.click("button[class='btn btn-info']");
      break;
    }
  }
  await page.locator("#navbarResponsive ul li a").click();
 
  await page.waitForTimeout(10000);
});