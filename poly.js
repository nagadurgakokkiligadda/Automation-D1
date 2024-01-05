class A {
	area(x, y) {
		console.log(x * y);
	}
}
class B extends A {
	area(a, b) {
		super.area(a, b);
		console.log('Class B')
	}
}
let ob = new B();
let output = ob.area(100, 200);


class Shape {
    calculateArea() {
        console.log('Calculating area of a generic shape');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        super.calculateArea();
        const area = Math.PI * Math.pow(this.radius, 2);
        console.log(`Area of Circle: ${area.toFixed(2)}`);
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        super.calculateArea();
        const area = this.width * this.height;
        console.log(`Area of Rectangle: ${area.toFixed(2)}`);
    }
}

// Example usage
const circle = new Circle(5);
const rectangle = new Rectangle(4, 8);

circle.calculateArea();
console.log('------------------');
rectangle.calculateArea();
