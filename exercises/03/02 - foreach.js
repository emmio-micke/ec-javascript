let students = [
    "Jessica",
    "Stina",
    "Ali",
    "Lisa"
];

/*
students.forEach( function ( student ) {
    console.log( student );
});
*/

function student_greeting ( student ) {
    console.log( "Hello, " + student );
}

students.forEach( student_greeting );
