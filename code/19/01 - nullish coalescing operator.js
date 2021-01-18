let a;

a = "something";
a = null;

let b;

if (a) {
    b = a;
} else {
    b = "world";
}

console.log(b);

b = a ? a : "world";

console.log(b);

b = a ?? "world";

console.log(b);
