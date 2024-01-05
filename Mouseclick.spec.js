const{test,expect}=require('@playwright/test')
test("Mouse Right click Action",async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    const button1=await page.locator("//span[@class='context-menu-one btn btn-neutral']")
    await button1.waitFor({ state: 'visible', timeout: 10000 });
    await button1.click({button:'right'})

    await page.waitForTimeout(5000)
})