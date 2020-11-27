let course = {
    students: [
        "Kalle",
        "Jessica",
        "Stina",
        "Ali"
    ],
    teacher: "Micke",
    schedule: ["Måndag", "Onsdag"],
    hello: function () {
        console.log("hello");
    },
    goodbye: function () {
        console.log("good bye");
    },
    print_teacher: function () {
        console.log("hello " + this.teacher);
    },
    list_students: function () {
        for ( let i = 0; i < this.students.length; i++ ) {
            console.log(this.students[i]);
        }
    }
};


course.list_students();

/*
function hello() {
    console.log("hello2");
}

hello();
*/
