const{test,expect}=require('@playwright/test');
test("Login succesful or not",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login')

//before login url

await expect(page).toHaveURL('https://the-internet.herokuapp.com/login')
const beforelogin=await page.url();
console.log("Before Login URL is",beforelogin)

//input
// const editable = await page.locator('#username');
//     const tagName = await editable.tagName();
    
//     // Assert that the field is an input field
//     expect(tagName.toLowerCase()).toBe('input');
//     console.log("Is username field an input field?", tagName.toLowerCase() === 'input');


const editable=await page.locator('#username')
await expect(editable).toBeEditable()
if(editable){
    console.log("editable")

}else{
    console.log("non editable")
}


//way-2
const editable1 = await page.locator('#username');

// Check if the field is editable
const isEditable = await editable1.isEditable();
isEditable ? console.log("editable") : console.log("non editable");


const dis=await page.locator('#username')  // --need to be tested
await expect(dis).toBeEnabled()
// await expect(dis1).toBe(true)

const enb=await page.locator('#username')
await expect(enb).toBeEnabled()

// const noinput=await page.locator('#username')
// await expect(noinput).toBeEmpty()
const usernameValue = await page.$eval('#username', (input) => input.value);
    expect(usernameValue).toBe(''); 
    console.log("Is username field not empty?", usernameValue !== '');

 await page.fill('#username','tomsmith')
 const usernameValue1 = await page.$eval('#username', (input) => input.value);
    expect(usernameValue1).not.toBe(''); 
    console.log("Is username field not empty?", usernameValue1 !== '');

    const usernameInput = await page.locator('#username');

    // Fill in the username and verify if it's filled
    await usernameInput.fill('tomsmith');
    const filledUsername = await usernameInput.inputValue();
    expect(filledUsername).toBeTruthy();


    // await page.fill('#password','SuperSecretPassword!')

    const passwordInput = await page.locator('#password');
    await passwordInput.fill('SuperSecretPassword!');
    const filledPassword = await passwordInput.inputValue();
    expect(filledPassword).toBeTruthy(); 

    await page.click('button[type="submit"]')
  
    const logout=await page.$('//a[@class="button secondary radius"]')
    await expect(logout).toBeTruthy()
    if(logout){
        console.log("login hogaya")
    }else{
        console.log("give another try")
    }



    //after login
    const afterlogin=page.url()
    console.log("after login the url is ",afterlogin)
    // await expect(page).toHaveURL('https://the-internet.herokuapp.com/login')  --- wrong url
    // await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure') 
      //-- after login
      await expect(afterlogin).toBe('https://the-internet.herokuapp.com/secure') 

 

      //verifying success message

      const msg=await page.textContent('#flash')
      await expect(msg).toContain('You logged into a secure area!')
    console.log("success message is ",msg)
await page.close()
})
