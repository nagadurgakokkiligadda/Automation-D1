const{test,expect}=require('@playwright/test')
test('Handle Checkboxes',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //specific or single checkbox
    await page.locator('#monday').check()
    // await page.check('#male')
    await expect(await page.locator('#monday')).toBeChecked()
    // await expect(await page.locator('#male')).isChecked()
    await expect(await page.locator('#monday').isChecked()).toBeTruthy();
    await expect(await page.locator('#tuesday').isChecked()).toBeFalsy();


    //multiple checkboxes
    const checkboxelocators=['#monday','#sunday','#saturday']
    for(const locators of checkboxelocators){
        await page.locator(locators).check()  //--selecting multiple checkboxes
     
    }
    for(const locators of checkboxelocators){
        if(await page.locator(locators).isChecked())
        await page.locator(locators).uncheck()  //--unselecting multiple checkboxes which are already checked
     
    }
 await page.waitForTimeout(5000)//-pausing code
})

