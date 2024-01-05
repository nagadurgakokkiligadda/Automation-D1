const{test,expect}=require('@playwright/test')
test("recording video of a test:in config",async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')

    await page.locator('//*[@id="login2"]').click()
    await page.fill('#loginusername','durga')
    await page.fill('#loginpassword','durga3')
    await page.locator('//button[normalize-space()="Log in"]').click()  //-failed
    // await page.waitForSelector('#logout', { state: 'visible' });
    // await expect(page.locator('#logout')).toBeVisible();
    const videoPath = await page.video().path();
  console.log(`Video recording saved at: ${videoPath}`);

    await page.waitForTimeout(5000)
})