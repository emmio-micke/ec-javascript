let myArray = [1, 2, 3, 4];

let sum = myArray.reduce( ( (accumulated, value) => accumulated + value), 0 );

let average = sum / myArray.length;

console.log(average);
