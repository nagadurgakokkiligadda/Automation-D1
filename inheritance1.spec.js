class Vehicle{
    constructor(make,model){
        this.make=make;
        this.model=model;
    }
}
class Car extends Vehicle{
    constructor(make,model,doors){
        super(make,model);
        this.doors=doors;
    }
}
const car = new Car('datsun','magnite',6)
console.log(car.make,car.model,car.doors)

