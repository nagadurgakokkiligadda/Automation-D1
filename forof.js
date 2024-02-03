
const n=[2,3,4,5]
function arraySum(n){
    let sum=0;
    for(const num of n){
        sum+=num;
    }
    return sum;
}

console.log(arraySum(n))

function evenNumbers() {
    const n = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (const even of n) {
        if (even % 2 === 0) {
            console.log(even);
        }
    }
}

evenNumbers();


const strArray = ['naga', 'durga', 'k'];

function printStringLengths(strings) {
    for (const str of strings) {
        console.log(str.length);
    }
}

printStringLengths(strArray);



function printObjectValues(obj) {
    for (const value of Object.values(obj)) {
        console.log(value);
    }
}
const sampleObject = {
    name: "John",
    age: 25,
    city: "New York"
};

printObjectValues(sampleObject);


function strrev(str){
    return str.split('').reverse().join('');
}
console.log(strrev('durga'))



function getUniqueElements(arr) {
    return [...new Set(arr)];
}
const originalArray = [1, 2, 3, 4, 2, 5, 6, 1, 7];
const uniqueElements = getUniqueElements(originalArray);

console.log("Original Array:", originalArray);
console.log("Unique Elements:", uniqueElements);

function printObjectEntries(obj) {
    for (const [key, value] of Object.entries(obj)) {
        console.log(`Key: ${key}, Value: ${value}`);
    }
}
printObjectEntries(sampleObject);



function concatenation(str){
    return str.join('')
}
const strings=["naga","durga","kokkiligadda"]
console.log(concatenation(strings))



let names = "Gabe, Gleb, Gao, Greg";
let nameList = names.split(", ");
for (let name of nameList) {
  console.log(`Hello, ${name}!`);
}