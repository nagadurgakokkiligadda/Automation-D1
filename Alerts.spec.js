const{test,expect}=require('@playwright/test')
const exp = require('constants')

test.only("Alert with OK",async({page})=>{
    // await page.goto('https://p360-masters.netlify.app/masters')
    await page.goto('https://testautomationpractice.blogspot.com/')

    //enabling alert handling

    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert')
      expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })
    await page.click('//button[normalize-space()="Alert"]')

    await page.waitForTimeout(5000)
})


test.skip("confirmation dialog with ok and cancel",async({page})=>{
  // await page.goto('https://p360-masters.netlify.app/masters')
  await page.goto('https://testautomationpractice.blogspot.com/')

  //enabling alert handling

  page.on('dialog',async dialog=>{
      expect(dialog.type()).toContain('confirm')
    expect(dialog.message()).toContain('Press a button!')
      // await dialog.accept()
      await dialog.dismiss()
  })
 
  await page.click('//button[normalize-space()="Confirm Box"]')
  // await expect(page.locator('//*[@id="demo"]')).toHaveText('You pressed OK!')
  await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed Cancel!')
  await page.waitForTimeout(10000)
})


test("prompt dialog with ok and cancel including input field",async({page})=>{
  // await page.goto('https://p360-masters.netlify.app/masters')
  await page.goto('https://testautomationpractice.blogspot.com/')

  //enabling alert handling

  page.on('dialog',async dialog=>{
      expect(dialog.type()).toContain('prompt')
    expect(dialog.message()).toContain('Please enter your name:')
expect(dialog.defaultValue()).toContain('Harry Potter')
      // await dialog.accept('Durga')
      await dialog.dismiss()
  })
 
  await page.click('//button[normalize-space()="Prompt"]')
  // await expect(page.locator('//*[@id="demo"]')).toHaveText('You pressed OK!')
  // await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Durga! How are you today?')
  
  await expect(page.locator('//p[@id="demo"]')).toHaveText('User cancelled the prompt.')
  await page.waitForTimeout(10000)
})