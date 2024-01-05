const {test,expect}=require('@playwright/test')
test('Builtin locators',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const logo=await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()


    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')


    await page.getByRole('button',{type:'submit'}).click()

    // await page.getByLabel('Employee Full Name').fill('admin123');


    //  await page.goto('https://fundflows-d.netlify.app/dashboard')
    //  await expect(await page.getByText('TTyp')).toBeVisible()

    
    // await expect(await page.getByText('test only arah  Smith')).toBeVisible()

    

})