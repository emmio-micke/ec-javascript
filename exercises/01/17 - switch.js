let day = new Date().getDay();

//console.log(day);

/*
if ( day == 1) {
    console.log("Måndag");
} else if ( day == 2) {
    console.log("Tisdag");
} else if ( day == 3) {
    console.log("Onsdag");
}
*/

day = 8;

switch ( day ) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Skoldag")
        break;

    case 6:
    case 7:
        console.log("Helg")
        break;

    default:
        console.log("Någon fuskar med dagarna...")
}