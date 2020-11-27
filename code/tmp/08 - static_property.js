class Rectangle {

    constructor() {
        console.log("Creating rectangle");
        if (typeof Rectangle.counter === 'undefined') {
            Rectangle.counter = 0;
        }
        Rectangle.counter++;
    }
}

let rect1 = new Rectangle();
console.log(Rectangle.counter);

let rect2 = new Rectangle();
console.log(Rectangle.counter);

let rect3 = new Rectangle();
console.log(Rectangle.counter);