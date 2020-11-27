/*

Skriv en funktion som jämför två tal och returnerar det största.

*/

function biggest_number( x, y ) {
    if ( x > y ) {
        return x;
    } else {
        return y;
    }
}

let result = biggest_number( 4, 4 );

console.log( result );
