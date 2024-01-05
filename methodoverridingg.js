class Vehicle{
    constructor(make,model){
        this.make=make;
        this.model=model;
    }
    displayInfo(){
        console.log(`vehicle:${this.make},${this.model}`)
    }
}
class Car extends Vehicle{
    constructor(make,model,doors){
        super(make,model);
        this.doors=doors;
    }
    displayInfo(){
        console.log(`vehicle:${this.make},${this.model},${this.doors}`)
    }
}
class Price extends Vehicle{
    constructor(make,model,doors,price){
        super(make,model,doors);
        this.price=price;
    }
    displayInfo(){
        console.log(`vehicle:${this.make},${this.model},${this.doors},${this.price}`) 
    }
}
const car = new Price('datsun','magnite',6,34.65432343)
car.displayInfo()

