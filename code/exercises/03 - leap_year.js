/*

Skriv en funktion som tar ett år (number) som parameter och returnerar true om året är ett skottår, annars false.

Skriv en annan funktion som tar två parametrar, start_year och end_year, och som skriver ut varje år i intervallet och om året är ett skottår eller inte.

*/

function leap_year ( year ) {
    let divided_four    = ( year % 4 ) === 0;
    let divided_hundred = ( year % 100 ) === 0;

    return ( divided_four && ! divided_hundred );
    
}

function check_years ( start_year, end_year ) {
    for ( let year = start_year; year <= end_year; year++ ) {
        let leap = leap_year ( year ) ? "skottår" : "ej skottår";

        console.log( year + ": " + leap );
    }
}

check_years (2015, 2025);