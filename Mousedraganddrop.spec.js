const{test,expect}=require('@playwright/test')

test("Mouse Drag N Drop",async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
//approach-1
    const rome=await page.locator('#box6')
    const italy=await page.locator('#box106')

    // await rome.hover()
    // await page.mouse.down()

    // await italy.hover()
    // await page.mouse.up()

//approach-2 --direct method

await rome.dragTo(italy)

const washington=await page.locator('#box3')
const us=await page.locator('#box103')

await washington.dragTo(us)


    await page.waitForTimeout(5000)
})