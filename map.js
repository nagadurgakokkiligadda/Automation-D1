const num=[23,43,54,2,3]
const double=num.map(function(n){
    return n*2;
});
console.log(double)


const square=num.map(function(n){
    return n**2;
});
console.log(square)

const  Fahrenheit=[23,2,4,11]
const celcius= Fahrenheit.map(function(F){
    return (F - 32) * 5/9;
});
console.log(celcius)



const names=['naga','durga','kokkiligadda']
const capitalize=names.map(function(name){
    return name.toUpperCase()
});
console.log(capitalize)

const length=names.map(function(name){
    return name.length
})
console.log("length ",length)


const odd=num.filter(function(n){
//   if(n%2!==0){
//     return n;
//   }
return n%2!==0;
})
console.log(odd)



const initials=names.map(function(name){
    return name[0]
});
console.log(initials)




const n1=[1,2,3,4,5]
const n2=[6,7,8,9,10]

const product = n1.map(function (num, index) {
    return num * n2[index];
  });
console.log(product)


const numbers = [2, 3, 4, 5];

const squaresAndCubes = numbers.map(function(number) {
  return {
    original: number,
    square: Math.pow(number, 2),
    cube: Math.pow(number, 3)
  };
});

console.log(squaresAndCubes);
