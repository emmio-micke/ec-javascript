let eggs = 4;
let flour = 3;
let milk = 10;

// Lika många ägg som vi har liter mjöl
// Dubbelt så mycket mjölk som mjöl

let eggs_flour;
if ( eggs < flour ) {
    eggs_flour = eggs;
} else {
    eggs_flour = flour;
}

let eggs_flour_milk;
if ( eggs_flour < ( milk / 2) ) {
    eggs_flour_milk = eggs_flour;
} else {
    eggs_flour_milk = ( milk / 2);
}

let use_eggs = eggs_flour_milk;
let use_flour = eggs_flour_milk;
let use_milk = eggs_flour_milk * 2;

console.log(use_eggs);
console.log(use_flour);
console.log(use_milk);
