'use strict';

let obj = {
    name: "Micke",
    age: 44
};

Object.preventExtensions(obj);

let property = "age";

// console.log(obj[property]);
// console.log(Object.keys(obj))

obj.namn = "Lisa";

console.log(obj);
