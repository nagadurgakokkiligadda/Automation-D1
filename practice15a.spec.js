const{test,expect}=require('@playwright/test')
test("practice",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')


    await page.fill('#name','Durga Kokkiligadda')
    const name=await page.$eval('#name',name=>name.value)
    await expect(name).toBe('Durga Kokkiligadda')
    await page.fill('#email','durga@gmail.com')
    await page.fill('#phone','12322453223')
    await page.fill('#textarea','Durga kokkiligadda,D/o Mallaiah kokkiligadda')
    const address=await page.$eval('#textarea',textarea=>textarea.value)
    await expect(address).toBe('Durga kokkiligadda,D/o Mallaiah kokkiligadda')

    await page.locator('#male').uncheck()
    await page.locator('#male').isChecked()
    await page.locator('#male').check()
    await page.waitForTimeout(2000)
    // await page.check('#female')

    await page.locator('#friday').check()
    await page.locator('#friday').uncheck()

    await page.selectOption('#country','United Kingdom')
    await page.selectOption('#colors',['Green','White'])

    await page.fill('#datepicker','25-12-2023')

    const table=await page.locator('//table[@name="BookTable"]')
    const cols=await table.locator('tbody tr th')
    console.log("num of cols:",await cols.count())

    const rows=await table.locator('tbody tr')
    console.log("num of rows:",await rows.count())

    const table1=await page.locator('#productTable')
    const cols1=await table1.locator('thead th')
    console.log("num of cols:",await cols1.count())

    const rows1=await table1.locator('tbody tr ')
    console.log("num of rows:",await rows1.count())

    const pages=await page.locator('.pagination li a')
    console.log("total no.of pages",await pages.count())

    const selectedrow= await rows1.filter({
       has: page.locator('td'),
        hasText:'Product 5',
    })
    await selectedrow.locator('input').check()
    await page.waitForTimeout(5000)

    await page.dblclick('//button[normalize-space()="Copy Text"]')
    await page.waitForTimeout(2000)


// await page.selectOption('.q highlight','QA Engineer')

    const src=await page.locator('#draggable')
    const dest=await page.locator('#droppable')
    await src.dragTo(dest)
    await page.waitForTimeout(5000)

})
test.skip("Alert with OK",async({page})=>{
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

test.skip("ok and cancel",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        // await dialog.accept()
        await dialog.dismiss()
    })
   const ok= await page.click('//button[normalize-space()="Confirm Box"]')
//    expect(await page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')
   expect(await page.locator('//p[@id="demo"]')).toHaveText('You pressed Cancel!')
    await page.waitForTimeout(5000)
})

test.skip("ok , cancel,input",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        // await dialog.accept('durgaaa')
        await dialog.dismiss()
    })
    await page.click('//button[normalize-space()="Prompt"]')
    // expect(await page.locator('//p[@id="demo"]')).toHaveText('Hello durgaaa! How are you today?')
    expect(await page.locator('//p[@id="demo"]')).toHaveText('User cancelled the prompt.')

    await page.waitForTimeout(5000)
})
