/*

Skriv en funktion som tar två parametrar och returnerar sant om den ena är positiv och den andra är negativ.

*/

function different_signs(x, y) {
    return ( ( x < 0 && y >= 0) || ( y < 0 && x >= 0) );
}

console.log(different_signs(3, 4));
console.log(different_signs(-3, -4));
console.log(different_signs(3, -4));
console.log(different_signs(-3, 4));
