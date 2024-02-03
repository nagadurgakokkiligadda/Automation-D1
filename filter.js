const num=[1,2,3,4,5,5,6,7,8,9,21,-22,-45,0,-123]
const even=num.filter(function(n){
    return n%2==0;
})
console.log(even)

const positive=num.filter(function(n){
    // return n>=0
    return n<0
})
console.log(positive)


const str=['apple','app','ape','ap state']
const substr=str.filter(function(s){
    return s.includes('state')
})
console.log(substr)