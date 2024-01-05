const{test,expect}=require('@playwright/test')
test("Mouse Double Click",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')


    //double clicking on a button


    const copybutton=await page.locator('//button[normalize-space()="Copy Text"]')
    await copybutton.dblclick()


    //verifying that the input box is having the same text or not

    const input=await page.locator('//input[@id="field2"]')
   await expect(input).toHaveValue('Hello World!')
   const output= await input.inputValue()
  console.log("text is ",await output)


    await page.waitForTimeout(5000)
})