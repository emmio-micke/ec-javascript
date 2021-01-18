
let person = {
    name: "Micke",
    age: 44
}

// let zipcode1 = person.address.zipcode;
let zipcode2 = person?.address?.zipcode;
let zipcode3 = person.address ? person.address.zipcode : null;
let zipcode4 = person.address.zipcode ?? null;

let poster = movie?.poster?.url ?? "default.jpg";

//console.log(zipcode1);
console.log(zipcode2);
console.log(zipcode3);
console.log(zipcode4);

