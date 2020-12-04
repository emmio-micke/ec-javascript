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

//console.log(people);

function sort_by_name(a, b) {
    if ( a.name < b.name ) {
        return -1;
    }

    if ( a.name > b.name ) {
        return 1;
    }

    return 0;
}

function sort_by_age(a, b) {
    return a.age - b.age;
}

people.sort(sort_by_age);

/*
people.sort(function (a, b) {
    if ( a.name < b.name ) {
        return -1;
    }

    if ( a.name > b.name ) {
        return 1;
    }

    if ( a.age > b.age ) {
        return -1;
    }

    if ( a.age < b.age ) {
        return 1;
    }

    return 0;
});
*/

console.log(people);