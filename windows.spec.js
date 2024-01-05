const{test,expect,chromium}=require('@playwright/test')
test("Handling Windows",async()=>{
    const browser=await chromium.launch()
    const context =await browser.newContext()
     const page1=await context.newPage()
     const page2=await context.newPage()
     const page3=await context.newPage()
     const count=context.pages()
     console.log(count.length)
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

   
    await page2.goto('https://www.orangehrm.com/')
    await expect(page2).toHaveTitle('OrangeHRM HR Software | OrangeHRM')
})
test.only("Handling miultiple pages",async()=>{
    const browser=await chromium.launch()
    const context =await browser.newContext()
     const page1=await context.newPage()
    
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

   const promise=context.waitForEvent('page')
   await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click()

   const newpage=await promise;
   await expect(newpage).toHaveTitle('OrangeHRM HR Software | OrangeHRM')

   await page1.waitForTimeout(3000)
   await newpage.waitForTimeout(3000)

})
