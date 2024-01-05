const{test,expect}=require('@playwright/test')
test('handle radio button',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#male').check()
    // await page.check('#male')
    await expect(await page.locator('#male')).toBeChecked()
    // await expect(await page.locator('#male')).isChecked()
    await expect(await page.locator('#male').isChecked()).toBeTruthy();
    await expect(await page.locator('#female').isChecked()).toBeFalsy();
})