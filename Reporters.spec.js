const { test, expect } = require('@playwright/test');

test("test1", async ({ page }) => {
    await page.goto('https://www.rahulshettyacademy.com/AutomationPractice/');
    await page.locator('#autocomplete').fill("ind");
   
    await page.waitForSelector("//ul/li/div[contains(@class,'ui-menu-item')]");
    const options = await page.$$("//ul/li/div[contains(@class,'ui-menu-item')]")
    for (let option of options) {
        const optionText = await option.textContent();
      
        if (optionText=='India') {
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(5000);
});

test("test2",async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
    await expect(page).toHaveTitle('STORE')
})
test("test3",async({page})=>{
    await page.goto('https://chat.openai.com/')
    await expect(page).toHaveTitle('ChatGPT')
})
// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.rahulshettyacademy.com/AutomationPractice/');
//   await page.getByPlaceholder('Type to Select Countries').click();
//   await page.getByPlaceholder('Type to Select Countries').fill('ind');
//   await page.locator('#ui-id-20').click();
//   await page.waitForTimeout(10000)
// });