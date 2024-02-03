const arr=()=>{
    console.log("arrow function demonstration without parameters")
}
arr();

const add=(n1,n2)=>{
    console.log("using parameters") 
    console.log(n1+n2)
   
}
add(23,443);

const add1=(n1,n2,n3=87)=>{
    console.log("Default parameters")
    console.log(n1+n2+n3)
}
add1(2,1)



const sumele=(ele)=>{
   let sum=0;
   for(i=0;i<ele.length;i++){
    sum+=ele[i]
   }
   return sum;
}
const ele=[34,54,43];
console.log(sumele(ele))

const factorial=(n)=>{
    if(n<=1)
        return 1;
    else
        return n*factorial(n-1);
}
console.log(factorial(5))



const average=(arravg)=>{
    let sum1=0;
    let avg;
    for(i=0;i<arravg.length;i++){
        sum1+=arravg[i];
        avg=sum1/2;
    }
    return avg
}
const arravg=[1,2,3,4,5]
console.log(average(arravg))



const maxele=(max1)=>{
    let max=0;
    for(i=0;i<max1.length;i++){
        if(max1[i]>max){
            return max=max1[i]
        }
        else{
            return "not found"
        }
    }
}
const max1=[43,5,6,7]
console.log(maxele(max1))


const even=(num)=>{
    let evennum=[]
    for(i=0;i<num.length;i++){
        if(num[i]%2==0){
            evennum.push(num[i])
        }
    }
    return evennum
}
const num=[43,2,34]
console.log(even(num))


const evennumber=(num)=>{
    return num.filter((n)=>n%2===0)
}
console.log(evennumber(num))