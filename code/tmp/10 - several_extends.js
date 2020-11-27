class Person {
    constructor(name) {
        this.name = name;
    }

    print() {
        console.log(this.name);
    }
}

class Employee extends Person {
    constructor(name, salery) {
        super(name);
        this.salery = salery;
    }
}

class Boss extends Employee {
    constructor(name, salery, level) {
        super(name, salery);
        this.level = level;
    }
}

let boss = new Boss("Kalle", 25000, 4);
boss.print();
