function sum( x, y, ...numbers ) {
    let sum = 0;

    console.log( x )
    console.log( y );

    for ( let number of numbers ) {
        sum += number;
    }

    return sum;
}

console.log( sum( 3, 7, 2, 8, 14 ) );
