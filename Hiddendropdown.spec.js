const{test,expect}=require('@playwright/test')
test('Handling Hidden dropdowns',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')



    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')


    await page.getByRole('button',{type:'submit'}).click()

    //navigate to pim 

    await page.locator("//span[normalize-space()='PIM']").click()
    await page.locator('//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]')





    await page.waitForTimeout(5000)
})