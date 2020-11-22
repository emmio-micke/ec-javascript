let points = [ 1, 30, 4, 21, 10000 ];

console.log( points );

points.sort( function (a, b ) {
    if ( a == 21 ) {
        return -1;
    }

    if ( a < b ) {
        return -1;
    }

    if ( a > b ) {
        return 1;
    }

    return 0;
});


/*
function sort_by_number ( number_one, number_two ) {
    return number_one - number_two;
}

points.sort( sort_by_number );
*/

console.log( points );


