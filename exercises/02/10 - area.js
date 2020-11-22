function calc_area(width, height) {
    return width * height;
}

function paint(squares) {
    return squares * 1.2;
}

let area = calc_area( 4, 5 );

console.log( "Arean är: " + area );
console.log( "Färg som går åt: " + paint(area) + " liter." );


