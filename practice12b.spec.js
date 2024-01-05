const{test,expect}=require('@playwright/test')
test("selecting source and destinations ",async({page})=>{
    await page.goto('https://www.abhibus.com/')
    await page.fill('//input[@placeholder="From Station"]','chennai')
    await page.fill('//input[@placeholder="To Station"]','Bangalore')
    await page.click('//input[@placeholder="Onward Journey Date"]')
    await page.locator('')
await page.waitForTimeout(5000);

})