let year = 2000;

//console.log( ( year % 4 ) === 0 );
//console.log( ( year % 100 ) !== 0 );

let divided_four    = ( year % 4 ) === 0;
let divided_hundred = ( year % 100 ) === 0;

// console.log( divided_four && ! divided_hundred );

if ( divided_four && ! divided_hundred ) {
    console.log( year + " är ett skottår.");
} else {
    console.log( year + " är INTE ett skottår.");
}
