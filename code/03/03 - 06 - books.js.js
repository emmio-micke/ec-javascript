let books_collection = [];

let book = {
    title: "Den gamle och havet",
    pages: 440,
    genre: "Skönlitterär"
};

books_collection.push( book );

books_collection.push( {
    title: "Omgiven av idioter",
    pages: 200,
    genre: "Påhitt"
} );

books_collection.push( {
    title: "Firman",
    pages: 800,
    genre: "Skönlitterär"
} );

/*
books_collection.forEach( function(current_book) {
    console.log( current_book.title );
});
*/

for ( let current_book of books_collection ) {
    console.log( current_book.title );
}