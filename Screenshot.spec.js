const{test,expect}=require('@playwright/test')
test('Page Screenshot',async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests\\screenshots\\'+Date.now()+'D.png'})

}); 

test('Full Page Screenshot',async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests\\screenshots\\'+Date.now()+'D.png',fullPage:true})


});

test('element Screenshot',async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.locator('//*[@id="content"]/div[2]/div[1]/form/div').screenshot({path:'tests\\screenshots\\'+Date.now()+'macbook.png'})
});
   test.only('Capturing into buffer',async({page})=>{
    await page.goto('https://demo.opencart.com/')
    const buffer = await page.screenshot();
    console.log(buffer.toString('base64'));

   }) 




