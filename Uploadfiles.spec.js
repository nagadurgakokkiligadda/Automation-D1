const{test,expect}=require('@playwright/test')
test("Uploading Files-single file",async({page})=>{
    await page.goto('https://www.foundit.in/')

    await page.waitForSelector('.mqfihd-upload')
    await page.locator('.mqfihd-upload').click()     //--- click on upload button


    //to selecting file as input from the system 
    await page.locator('#file-upload').setInputFiles("tests\\uploadfiles\\output.pdf")
    await page.waitForTimeout(5000)

})
    test("Uploading Multiple files",async({page})=>{
     
        await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php ')
        await page.waitForSelector('#filesToUpload')
        await page.locator('#filesToUpload').click()
        await page.locator('#filesToUpload').setInputFiles(['tests\\uploadfiles\\output.pdf','tests\\uploadfiles\\changes.txt'])
  
    await page.waitForTimeout(5000)

    await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('output.pdf')
    await expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('changes.txt')


//removing files
await page.locator('#filesToUpload').setInputFiles([])
await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')
await page.waitForTimeout(3000)
})


