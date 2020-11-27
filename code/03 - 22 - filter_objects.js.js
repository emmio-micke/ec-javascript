let people = [];

people.push({
    name: "Kalle",
    age: 20
});

people.push({
    name: "Kalle",
    age: 33
});

people.push({
    name: "Jessica",
    age: 37
});

console.log(people);

let old_people = people
    .filter( person => person.age > 25 )
    .map( person => person.name );

console.log(old_people);
