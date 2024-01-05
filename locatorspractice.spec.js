const{test,expect}=require('@playwright/test')
test("Locators Practice",async({page})=>{
    await page.goto('https://p360-masters.netlify.app/masters')

    //clicking on request otp button using property as a locator

    // await page.locator('type=button').click()
    // await page.click('')
    //clicking on request otp button using css as a locator   - to handle input box

    //1.creating css using id -- giving input to  username field

    // await page.locator('#email').fill('durga')
    // await page.fill('#email','durga')
    // await page.type('#email','nagadurga.k@piersoft.com')
    await page.locator('#email','nagadurga.k@piersoft.com').clear()



    //2.clicking on request otp button using xpath

    await page.locator("//button[normalize-space()='Request OTP']").click()

    await page.fill("//input[@id='otp']",'964390')

    await page.click("//button[normalize-space()='Verify OTP']")
    await page.goto('https://p360-masters.netlify.app/masters/area')
   const newbutton= await page.waitForSelector("button[aria-label='New'] span")
   await newbutton.click()

    await page.waitForTimeout(5000)
})