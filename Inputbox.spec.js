const{test,expect}=require('@playwright/test')
test('handle inputbox',async({page})=>{
    // await page.goto('https://kmv-fund-flows.netlify.app/')
    // await page.waitForSelector('#outlined-size-small');
//    await  page.locator('#outlined-size-small').fill('nagadurga.k@piersoft.com')
//    await page.fill('#outlined-size-small','durga')

// await expect( await  page.locator('#outlined-size-small')).toBeVisible()
// await expect( await  page.locator('#outlined-size-small')).toBeEmpty()


await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator('#name').fill('durga')
await expect( await  page.locator('#name')).toBeVisible()
// await expect( await  page.locator('#name')).toBeEmpty()
await expect( await  page.locator('#name')).toBeEditable()
// await expect(await page.locator('#FSsubmit')).toBeEditable()//failed
await expect(await page.locator('#datepicker')).toBeEditable()
await expect(await page.locator('#datepicker')).toBeEnabled()
await page.waitForTimeout(5000)//-pausing code
})