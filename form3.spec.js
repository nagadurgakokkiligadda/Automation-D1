const{test,expect}=require('@playwright/test')
test('Multi select Dropdowns',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

//isvisible
await expect(await page.locator('#colors').isVisible()).toBeTruthy()

    // selecting multiple options from dropdown

    const sel=await page.selectOption('#colors',['Red','Blue'])
   

    //finding length of dropdown

    const len=await page.$$('#colors option')
    console.log("length of multi slect dropdown is",len.length)


//tohavelength 

await expect(len).toHaveLength(5)


//printing all elements in console 

const countele=await page.locator('#colors').textContent()
console.log(countele)

await expect(countele.includes('orange')).toBeFalsy()

await expect(countele.includes('Green')).toBeTruthy()
await page.waitForTimeout(5000)



})


test("Data Validation",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const title=await page.title()
    console.log(title)
    expect(page).toHaveTitle('Automation Testing Practice')

    const url=await page.url()
    console.log(url)
    expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')
})


test("Screenshots",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.screenshot({path:'tests\\screenshots\\'+Date.now()+'d1.png'})
    await page.screenshot({path:'tests\\screenshots\\'+Date.now()+'d1.png',fullPage:true})
    await page.locator('#HTML1').screenshot({path:'tests\\screenshots\\'+Date.now()+'d1.png'})

})

test("Uploading files",async({page})=>{
    await page.goto('https://www.foundit.in/')
    await page.waitForSelector('//div[@class="heroSection-buttonContainer_secondaryBtn secondaryBtn"]')
    await page.click('//div[@class="heroSection-buttonContainer_secondaryBtn secondaryBtn"]')
    await page.locator('#file-upload').setInputFiles('tests\\uploadfiles\\Market Place Test Report (1).docx')
    await page.waitForTimeout(3000)
    await page.locator('#file-upload').setInputFiles(['tests\\uploadfiles\\changes.txt'])
    await page.locator('#file-upload').setInputFiles([])
    
    await page.click('#pop_upload')

    await page.goBack()
   

    await page.waitForTimeout(5000)
})


//uploading multiple files
test("uploading files",async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
await page.click('#filesToUpload')
    await page.locator('#filesToUpload').setInputFiles(['tests\\uploadfiles\\changes.txt','tests\\uploadfiles\\output.pdf'])
    await page.waitForTimeout(2000)
    await page.locator('#filesToUpload').setInputFiles([])
    await page.waitForTimeout(5000)
})



test.only("Navigation Testing",async({page})=>{
    await page.goto('https://signup.com/')
    await page.waitForSelector('div[class="main-orange-btn4"] button[class="small-blue-btn"]')
    await page.click('div[class="main-orange-btn4"] button[class="small-blue-btn"]')
    // await page.goForward()
    await page.fill('#register-fname','durgaaaaaa')
    await page.goBack()
   await page.goForward()
   await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
       await page.waitForTimeout(5000)
})
