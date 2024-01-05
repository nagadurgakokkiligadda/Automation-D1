// const{test,expect}=require('@playwright/test')
// test('Inner frames',async({page})=>{
//     await page.goto('https://ui.vision/demo/webtest/frames/')

//     const frame3=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
//     frame3.locator("input[name='mytext3']").fill('Durgaaa')


//     const childFrames=await frame3.childFrames()
//     await childFrames[0].locator('//input[@name="mytext3"]').check({ timeout: 60000 })

//     await page.waitForTimeout(50000)



// })


const { test, expect } = require('@playwright/test');

test('Inner frames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" });
    await frame3.locator("input[name='mytext3']").fill('Durgaaa');

    const childFrames = await frame3.childFrames();
    
    // Wait for the element to be present in the child frame
    await childFrames[0].waitForSelector("//*[@id='i5']/div[3]/div");
    
    // Check the element
    await childFrames[0].locator("//*[@id='i5']/div[3]/div").check({ timeout: 60000 });

    // await page.waitForTimeout(50000);
});
