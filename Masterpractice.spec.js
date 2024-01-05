const{test,expect}=require('@playwright/test')
test('Practice',async({page})=>{
    await page.goto('https://p360-masters.netlify.app/masters');
  await expect(page).toHaveTitle('P360 Masters')
   const pagetitle=await page.title()
    console.log('page title is',pagetitle)
    await expect(page).toHaveURL('https://p360-masters.netlify.app/')
    const pageurl = await page.url()
    console.log('page URL is',pageurl)
  


    await page.getByPlaceholder('Enter Your Email').fill('nagadurga.k@piersoft.com')

    await page.getByRole('button',{type:'submit'}).click()

    // await page.getByPlaceholder('Enter OTP').fill('297450')

    // await page.getByRole('button',{type:'submit'}).click()
    

    await page.waitForTimeout(5000)
})