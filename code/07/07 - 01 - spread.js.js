function sum(x, y, z, ...numbers) {
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(numbers);
    return x + y + z;
}

let myArr = [1, 2, 3, 4];


console.log( sum( [1, 2, 3, 4, 5, 6] ) );
console.log( sum( ...[1, 2, 3, 4, 5, 6] ) );
console.log( sum( 1, 2, 3, 4, 5, 6 ) );
