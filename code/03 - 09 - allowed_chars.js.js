function clean_string( string_to_clean ) {
    let allowed_chars = "abcdefghijklmnopqrstuvwxyzåäö0123456789 ";
    let cleaned = "";

    for ( let char of string_to_clean ) {
        if ( allowed_chars.includes( char ) ) {
            cleaned += char;
        }
    }

    return cleaned;
}

let result = clean_string( "hello world, welcome to the universe!" );

console.log( result );
