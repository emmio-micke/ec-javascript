class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log("person: " + this.name);
    }
}

class Employee extends Person {
    constructor(name, age, salery) {
        console.log("Creating employee");

        super(name, age);

        this.salery = salery;
    }

    print() {
        console.log("employee");
        super.print();
    }
}

let person1 = new Person("Kalle", 33);

let employee1 = new Employee("Lisa", 40, 25000);
console.log(employee1);
