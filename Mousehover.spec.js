const{test,expect}=require('@playwright/test')
test("Mouse hover actions",async({page})=>{
    await page.goto('https://demo.opencart.com/')
    const desktops=await page.locator("//a[normalize-space()='Desktops']")
    const mac=await page.locator("//a[normalize-space()='Mac (1)']")

    //performing mouse hover on elements

    await desktops.hover()

    await page.waitForTimeout(3000)
    await mac.hover()

    await page.waitForTimeout(5000)
})