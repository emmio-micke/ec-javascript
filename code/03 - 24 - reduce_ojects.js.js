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

let sum = people.reduce( ( (accumulated, person) => accumulated + person.age), 0 )

let average = sum / people.length;

console.log(average);
