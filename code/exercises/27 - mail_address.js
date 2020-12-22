/*

Skriv ett mönster som matchar mailadresser. Den personliga delen av mailadressen (delen innan @-tecknet) får innehålla följande:

Versaler (A-Z) och gemener (a-z) av engelska bokstäver.
Siffror (0-9).
Tecknena ! # $ % & ' * + - / = ? ^ _ ` { | } ~
Tecknet . (punkt) om det inte är det första eller sista tecknet och inte följer en annan punkt, dvs man får inte ha två punkter i rad.

*/

const paragraph = 'mikael.olsson@emmio.se';
const regex = /^\w+([\.-]?\w+)*@\w+([\.])*(\.\w{2,3})+$/;
const found = paragraph.match(regex);

console.log(found[0]);
