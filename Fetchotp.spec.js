// const{test,expect}=require('@playwright/test')
// test('Masters Testing Demo Using Codegen',async({page})=>{
//     await page.goto('https://p360-masters.netlify.app/masters')

// })
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://p360-masters.netlify.app/masters');
  await page.goto('https://p360-masters.netlify.app/');
  await page.getByPlaceholder('Enter Your Email').click();
  await page.getByPlaceholder('Enter Your Email').fill('nagadurga.k@piersoft.com');
  await page.getByRole('button', { name: 'Request OTP' }).click();
  await page.getByPlaceholder('Enter OTP').click();
  await page.getByPlaceholder('Enter OTP').fill('931909');
  await page.getByRole('button', { name: 'Verify OTP' }).click();
});