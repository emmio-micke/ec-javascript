/*

Skapa en array som innehåller 10 provresultat, tal från 0 till 100, motsvarande hur många procent man klarat på tentan. Loopa igenom arrayen och skriv ut varje resultat och vilket betyg man får för detta resultat om gränsen för G går vid 50% och gränsen för VG går vid 80%.

*/

function grade_percentage ( percentage ) {
    if ( percentage < 50 ) {
        return "IG";
    } else if ( percentage < 80 ) {
        return "G";
    } else {
        return "VG";
    }
}

let test_results = [30, 40, 50, 78, 80, 99, 86, 65, 17, 92];

for (let index = 0; index < test_results.length; index++ ) {
    let result = test_results[index];
    let grade = grade_percentage ( result );

    console.log( result + ": " + grade );
}
