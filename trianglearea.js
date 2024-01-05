class Area{
    constructor(b,h){
        this.b=b;
        this.h=h;
    }
    trianglearea(){
        return 0.5*this.b*this.h;
    }
}
const area=new Area(2,5)
console.log(area.trianglearea())



class Circle{
    constructor(r){
        this.r=r;
    }
    circlearea(){
        return 3.14*this.r*this.r;
    }

}
const circle=new Circle(5);
console.log(circle.circlearea())

class Person{
    constructor(name,age,place){
        this.name=name;
        this.age=age;
        this.place=place;
    }
    show(){
        console.log(this.name,this.age,this.place);
    }
}
const person=new Person('durga',22,'tarigoppula')
person.show()


class Book{
    constructor(author,title){
        this.author=author;
        this.title=title;
    }
    showDetails(){
        console.log(this.author,this.title)
    }
}
const book=new Book('Durga','durgaaa')
book.showDetails()


class Calculator{
    constructor(n1,n2){
       this.n1=n1;
       this.n2=n2;
      
    }
    add(){
       console.log(this.n1+this.n2);
    }
    sub(){
        console.log( this.n1-this.n2);
    }
    mul(){
      console.log(this.n1*this.n2);
    }
    div(){
       console.log(this.n1/this.n2);
    }
}
console.log("calculator")
const calc=new Calculator(32,6)
calc.add()
calc.div()


class Product{
    constructor(name,price,qty){
        this.name=name;
        this.price=price;
        this.qty=qty;
    }
    totalcost(){
        if(this.qty>0){
            return this.qty*this.price
        }
        else{
            return "qty should more than zero"
        }
       
    }

}
const prod=new Product('mouse',800,3)
console.log(`total cost of${prod.qty} ${prod.name}  is$${prod.totalcost()}`)