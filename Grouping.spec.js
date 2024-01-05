const{test,expect}=require('@playwright/test')


test.beforeAll(async()=>{
    console.log("before all hook")
})
test.afterAll(async()=>{
    console.log("after all hook")
})

test.beforeEach(async()=>{
    console.log("before each hook")
})
test.afterEach(async()=>{
    console.log("after each")
})



// test.describe.only('Group1',()=>{
    test.describe.skip('Group1',()=>{
    test("Grouping tests-2",async({page})=>{
        console.log('test2')
        })
        test("Grouping tests-4",async({page})=>{
            console.log('test4')
})
})

test.describe('Group-2',()=>{

    test("Grouping tests-1",async({page})=>{
    console.log('test1')
    })

    test("Grouping tests-3",async({page})=>{
            console.log('test3')
    })

    test("Grouping tests-5",async({page})=>{
                    console.log('test5')
    })
})