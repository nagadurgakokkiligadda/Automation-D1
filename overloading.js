// javascript does not support method overloading 



function add() {
    if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    } else if (arguments.length === 3) {
        return arguments[0] + arguments[1] + arguments[2];
    } else {
        return "Invalid number of arguments";
    }
}

console.log(add(1, 2));        // Output: 3
console.log(add(1, 2, 3));     // Output: 6
console.log(add(1, 2, 3, 4));  // Output: Invalid number of arguments
