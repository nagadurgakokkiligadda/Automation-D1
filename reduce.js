const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((n1, n2) => n1 + n2, 0);
console.log("Sum of elements:", sum);


const product=numbers.reduce((n1,n2)=>n1*n2);
console.log(product)


const max = numbers.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
}, Number.NEGATIVE_INFINITY);

console.log("Maximum value:", max);



const min = numbers.reduce((accumulator, currentValue) => {
    return Math.min(accumulator, currentValue);
}, Number.NEGATIVE_INFINITY);

console.log("Maximum value:", min);

