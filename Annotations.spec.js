const{test,expect}=require('@playwright/test')


//for specific -only
test("Annotations",async({page})=>{
    // await page.goto('https://the-internet.herokuapp.com/login')
    console.log("test1")

})
test.only("second test using only",async({page})=>{
    console.log('TEst2')
})
test("using skip",async({page,browserName})=>{
    console.log("Using skip")
    if(browserName=='chromium'){    //for particular condition 
        test.skip()
    }
})
test.skip("without using condition",async({page})=>{
    console.log("skipppeddd.......")
})

test("fixme annotation",async({page})=>{
    test.fixme()    //when we have unknown or known issues
    console.log("fixme test")
})



test("fail annotation",async({page})=>{
    test.fail()    // expectation is to fail the test
    console.log("test")
    expect(1).toBe(1)    //actual   --failed
    // expect(1).toBe(2)    //passed
})

test("using fail",async({page,browserName})=>{
        console.log("Using fail")
        if(browserName=='chromium'){    //for particular condition 
            test.fail()
        }
    })

test(" fail",async({page,browserName})=>{
    console.log("Using fail")
    if(browserName=='firefox'){    //for particular condition 
        test.fail()
    }
})


test("slow",async({page})=>{
        test.slow()
        // test.setTimeout(5000)
        await page.goto('https://the-internet.herokuapp.com/login')
        console.log("test slow")
    
    })