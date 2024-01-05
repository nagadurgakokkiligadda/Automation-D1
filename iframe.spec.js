const{test,expect}=require('@playwright/test')
test('Iframes',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    const allframes= await page.frames()
    console.log("no.of frames present in this page are:",allframes.length)


//1.using url
    const frame1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    frame1.fill("input[name='mytext1']","hello D")

    //2.using name
    // const varname=await page.frame('name')


    //app-2: using frame locator

  const inputbox =  await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
inputbox.fill('Hello Durga')
    await page.waitForTimeout(5000)
})