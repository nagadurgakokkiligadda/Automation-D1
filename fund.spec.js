import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://fundflows-d.netlify.app/logout');
  await page.getByRole('link', { name: 'Back to our site' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('nagadurga.k@piersoft.com');
  await page.getByRole('button', { name: 'Request OTP' }).click();
  await page.getByLabel('Enter OTP').click();
  await page.getByLabel('Enter OTP').fill('23444');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('html').click();
  await page.getByRole('img', { name: 'Logo' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('knagadurga361@gmail.com');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Request OTP' }).click();
  await page.getByLabel('Email').click();
});