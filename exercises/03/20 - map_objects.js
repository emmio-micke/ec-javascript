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

let student_names = people.map( person => person.name );

console.log(student_names);
