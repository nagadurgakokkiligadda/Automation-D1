const{test,expect} = require('@playwright/test')
test('d',async({page})=>{
   await  page.goto('https://kmv-fund-flows.netlify.app/')
     await expect(page).toHaveURL('https://kmv-fund-flows.netlify.app/')
     await expect(page).toHaveTitle('KMV Fund Flows')
     await page.goto('https://fundflows-d.netlify.app/')
     const logoelement=await page.locator('.MuiBox-root.css-t40uxq')
     await expect(logoelement).toBeVisible()
     const emailbox=await page.locator('#email')
     await expect(emailbox).toBeEnabled()
    //  const emailbox1=await page.locator('#email')
    //  await expect(emailbox1).toBeDisabled()
await page.goto('https://demo.nopcommerce.com/register')

const femaleradiobutton=await page.locator('#gender-female')
await femaleradiobutton.click()
await expect(femaleradiobutton).toBeChecked()

const checkbox= await page.locator('#Newsletter')
await expect(checkbox).toBeChecked()

const loginbutton = await page.locator('#register-button')
// await loginbutton.click()
await expect(loginbutton).toHaveAttribute('type','submit')


// await page.waitForSelector('.MuiBox-root.css-0 h6');
// await expect(await page.locator('.MuiBox-root.css-0 h6')).toHaveText("Login Your Account");
await expect(page).not.toHaveURL('https://kmv-fund-flows.netlify.app/')


})