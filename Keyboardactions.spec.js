const{test,expect}=require('@playwright/test')
test("Handling Keyboard Actions",async({page})=>{
    await page.goto('https://gotranscript.com/text-compare')
      await page.locator('[name="text1"]').fill("Hello vijayawada")
    // await page.type('name="text1"',"Hello All ")


    //selecting  the text  and copying from one box and pasting it into another one
//1.selecting text -- ctrl+A   --press is used for combination of keys

await page.keyboard.press('Control+A')

//2.copying the text -- ctrl+c

await page.keyboard.press('Control+C')

//3.pressing tab  -- for single key we use up and down

await page.keyboard.down('Tab')

//releasing the tab key

await page.keyboard.up('Tab')


//4.ctrl+v


await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000)
})