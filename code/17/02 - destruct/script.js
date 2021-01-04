let a = 1;
let b = 3;

let tmp = a;
a = b;
b = tmp;

console.log(a); // 3
console.log(b); // 1

[a, b] = [b, a];
console.log(a); // 1
console.log(b); // 3

