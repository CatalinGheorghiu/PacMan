class Car {
    Brand;
    Model;
    Color;

    constructor(brand, model, color) {
        this.Brand = brand;
        this.Model = model;
        this.Color = color;
    }

    moves() {
        return `Bruuum Bruum!`;
    }

    //Brand #################
    get x() {
        return `Brand of car : ${this.Brand}`;
    }

    set x(theBrand) {
        this.Brand = theBrand;
        this.Brand = theBrand.toUpperCase();
    }

    //Model #################
    get Model() {
        return `Model of car: ${this.Model}`;
    }

    set Model(theModel) {
        this.Model = theModel;
    }
}

var myCar = new Car("Volvo", "XC60", "Sky Blue");
console.log(myCar.moves());
console.log(myCar.x);
myCar.x = "Opel";

console.log(myCar.x);
