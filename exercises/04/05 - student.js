class Student {
    constructor(name = "", age = 0) {
        this.name = name;
        this.age = age;
        this.subjects = [];
    }

    greeting() {
        console.log("Hello " + this.name);
    }

    add_subject(title = "", points = 0) {
        this.subjects.push(new Subject(title, points));
    }

    get courses() {
        return this.subjects // [ Subject { title: 'JavaScript', points: 55 }, Subject { title: 'PHP', points: 40 } ]
            .map(current_subject => current_subject.title) // [ 'JavaScript', 'PHP' ]
            .join(', '); // JavaScript, PHP
    }

    set courses(course) {
        if (this.subjects.length < 3) {
            this.subjects.push(new Subject(course[0], course[1]));
        } else {
            console.log("Too many subjects");
        }
    }
}

class Subject {
    constructor(title = "", points = 0) {
        this.title = title;
        this.points = points;
    }
}

let student1 = new Student("Micke", 44);
student1.courses = [ "Cooking", 10 ];
student1.courses = [ "Cleaning", 20 ];
student1.courses = [ "Shopping", 30 ];
student1.courses = [ "Training", 40 ];
/*
student1.add_subject("JavaScript");
student1.add_subject("PHP");
student1.add_subject("Databaser");
*/

console.log(student1);
