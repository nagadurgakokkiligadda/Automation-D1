import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://chat.openai.com/auth/login');
  await page.getByText('ChatGPT ●Get startedLog inSign upTerms of use|Privacy policy').click();
  await page.getByTestId('login-button').click();
  await page.frameLocator('iframe[title="Widget containing a Cloudflare security challenge"]').getByLabel('Verify you are human').check();
  await page.frameLocator('iframe[title="Widget containing a Cloudflare security challenge"]').getByLabel('Verify you are human').check();
  await page.goto('https://chat.openai.com/api/auth/error');
  await page.goto('https://chat.openai.com/api/auth/error?__cf_chl_rt_tk=wZiSPZve76Vfe6njanywyxdqBw29_OV6XY4.exBI92o-1697027219-0-gaNycGzNDOU');
  await page.goto('https://chat.openai.com/api/auth/error');
  await page.frameLocator('iframe[title="Widget containing a Cloudflare security challenge"]').getByLabel('Verify you are human').check();
  await page.goto('https://chat.openai.com/api/auth/error');
  await page.goto('https://chat.openai.com/api/auth/error?__cf_chl_rt_tk=F1alyCHMGj_vqOYzQASgnxBPp600l2kF7AmZOxBodIs-1697027242-0-gaNycGzNDOU');
  await page.goto('https://chat.openai.com/api/auth/error');
  await page.frameLocator('iframe[title="Widget containing a Cloudflare security challenge"]').getByLabel('Verify you are human').check();
  await page.goto('https://chat.openai.com/api/auth/error');
  await page.goto('https://chat.openai.com/api/auth/error?__cf_chl_rt_tk=OzXh6Kd8N4j44sTvUuLCbgdf_yVu9pPFyHE7GFiM9r4-1697027287-0-gaNycGzNDOU');
  await page.goto('https://chat.openai.com/api/auth/error');
});