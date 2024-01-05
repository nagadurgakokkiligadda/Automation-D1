

//     await page.goto('https://p360-masters.netlify.app/masters')
//     await page.goto('https://p360-masters.netlify.app/masters/area')
//    const newbutton= await page.waitForSelector("//button[@aria-label='New']")
//    await newbutton.click()

//codegen


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('html').click();
  await page.locator('body').click();
  await page.locator('body').click();
  await page.goto('https://p360-masters.netlify.app/masters');
  await page.goto('https://p360-masters.netlify.app/');
  await page.getByPlaceholder('Enter Your Email').click();
  await page.getByPlaceholder('Enter Your Email').fill('nagadurga.k@piersoft.com');
  await page.getByRole('button', { name: 'Request OTP' }).click();
  await page.getByPlaceholder('Enter OTP').click();
  await page.getByPlaceholder('Enter OTP').fill('502306');
  await page.getByRole('button', { name: 'Verify OTP' }).click();
  await page.getByRole('link', { name: 'Area Logistics Codes' }).click();
  await page.getByLabel('New').click();
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('codegen');
  await page.getByText('Create RecordCancel').click();
  await page.getByRole('button', { name: 'Create Record' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('row', { name: '1403 codegen Edit ChangeLog' }).getByLabel('Edit').click();
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').press('ArrowRight');
  await page.getByPlaceholder('Description').press('ArrowRight');
  await page.getByPlaceholder('Description').press('ArrowRight');
  await page.getByPlaceholder('Description').fill('codegen test');
  await page.getByLabel('Save', { exact: true }).click();
  await page.getByRole('row', { name: '1403 codegen test Edit ChangeLog' }).getByLabel('ChangeLog').click();
  await page.getByLabel('Close', { exact: true }).click();
  await page.getByTestId('ArrowBackIcon').click();

  await page.waitForTimeout(5000)
});


   
