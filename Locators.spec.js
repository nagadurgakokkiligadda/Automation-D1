// const {test,expect}=require('@playwright/test')   --import packages in 2 ways 
import {test,expect} from '@playwright/test'    

test('Locators', async({page})=>{

//  await page.goto('https://fundflows-d.netlify.app/logout')



//  await page.locator('text= Request OTP').click()

//  await page.click('text=Login')

//  await page.locator('text=/Log\\s*in/i').click();



await page.goto('https://fundflows-d.netlify.app/')
await page.locator('text=/Log\\s*in/i').click();


// await page.getByRole('button', { name: 'Sign in' }).click();

})