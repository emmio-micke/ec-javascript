class Vehicle {
    constructor(make = "", model = "", color = "", no_of_wheels = 4) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.no_of_wheels = no_of_wheels;
    }

    print() {
        console.log(this.make, this.model);
    }
}

class Motorcycle extends Vehicle {
    constructor(make = "", model = "", color = "", no_of_wheels = 2, gears = 5) {
        super(make, model, color, no_of_wheels);
        this.gears = gears;
    }
    print() {
        console.log("motorcycle");
        console.log("växlar: " + this.gears);
        super.print();
    }
}


let car1 = new Vehicle("Volkswagen", "Touran", "red");
car1.print();
//console.log(car1)

let mc1 = new Motorcycle("Triumph", "Trophy", "blue");
mc1.print();
//console.log(mc1)
