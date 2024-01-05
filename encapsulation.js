function MyClass() {
    let _privateVar = "I am private";

    function _privateMethod() {
        console.log("This is a private method");
    }

    this.publicVar = "I am public";

    this.accessPrivateMembers = function() {
        console.log("Accessing private variable:", _privateVar);
        _privateMethod();
    };
}

let myObject = new MyClass();

console.log(myObject.publicVar);
console.log(myObject._privateVar);//undefined
myObject.accessPrivateMembers();


function createPerson(initialName, initialAge) {
    // Private variables
    let name = initialName;
    let age = initialAge;

    // Public methods to interact with private variables
    return {
        // Getter for name
        getName: function () {
            return name;
        },
        // Setter for name
        setName: function (newName) {
            name = newName;
        },
        // Getter for age
        getAge: function () {
            return age;
        },
        // Setter for age
        setAge: function (newAge) {
            if (newAge >= 0) {
                age = newAge;
            } else {
                console.log("Age must be a non-negative value.");
            }
        },
        // Public method to display person information
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
}

// Example usage
let person = createPerson("John Doe", 30);

// Access and modify properties through public methods
console.log(person.getName()); // Output: John Doe
console.log(person.getAge());  // Output: 30

person.setName("Jane Doe");
person.setAge(25);

console.log(person.getName()); // Output: Jane Doe
console.log(person.getAge());  // Output: 25

// Display person information using the public method
person.displayInfo();
// Output: Name: Jane Doe, Age: 25


class Person {
    // Private variables conventionally indicated by an underscore
    _name;
    _age;

    // Constructor to initialize private variables
    constructor(initialName, initialAge) {
        this._name = initialName;
        this._age = initialAge;
    }

    // Public methods to interact with private variables
    getName() {
        return this._name;
    }

    setName(newName) {
        this._name = newName;
    }

    getAge() {
        return this._age;
    }

    setAge(newAge) {
        if (newAge >= 0) {
            this._age = newAge;
        } else {
            console.log("Age must be a non-negative value.");
        }
    }

    // Public method to display person information
    displayInfo() {
        console.log(`Name: ${this._name}, Age: ${this._age}`);
    }
}

// Example usage
let person1 = new Person("John Doe", 30);

// Access and modify properties through public methods
console.log(person1.getName()); // Output: John Doe
console.log(person1.getAge());  // Output: 30

person.setName("Jane Doe");
person.setAge(25);

console.log(person1.getName()); // Output: Jane Doe
console.log(person1.getAge());  // Output: 25

// Display person1 information using the public method
person1.displayInfo();
// Output: Name: Jane Doe, Age: 25

