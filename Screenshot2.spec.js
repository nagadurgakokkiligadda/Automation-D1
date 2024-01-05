const{test,expect}=require('@playwright/test')
test("using screesnshot:on in config",async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')

    await page.locator('//*[@id="login2"]').click()
    await page.fill('#loginusername','durga')
    await page.fill('#loginpassword','durga3')
    await page.locator('button[onclick="logIn()"]').click()
    await expect(page.locator('#logout2')).toBeVisible()
})