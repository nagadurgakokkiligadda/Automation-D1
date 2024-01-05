class Shape{
    constructor(){
      
    }
    area(){
       return 'base class'
    }
    perimeter(){
       return 'base class'
    }
}
class Triangle extends Shape{
  
    constructor(s1,s2,s3){
        super();
        this.s1=s1;
        this.s2=s2;
        this.s3=s3;
    }
    isValidTriangle() {
        return (
          this.s1 + this.s2 > this.s3 &&
          this.s1 + this.s3 > this.s2 &&
          this.s2 + this.s3 > this.s1
        );
      }
      area() {
        if (!this.isValidTriangle()) {
          return 'Invalid triangle';
        }
    
        const s = (this.s1 + this.s2 + this.s3) / 2;
        return Math.sqrt(s * (s - this.s1) * (s - this.s2) * (s - this.s3));
      }
    perimeter(){
        return this.s1+this.s2+this.s3;
    }
}
const triangle=new Triangle(9.1,12,15)
console.log(triangle.area())
console.log(triangle.perimeter())