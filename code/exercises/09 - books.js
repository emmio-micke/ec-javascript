/*

Skriv en klass som beskriver böcker och en klass som beskriver författare.
Ge författar-klassen egenskapen books och låt den innehålla de bok-objekt som författaren har skrivit.
Skriv en metod i bok-klassen som skriver ut boken på något bra sätt, t ex: "Mio, min Mio, 373 sidor, äventyr". (Ni får anpassa lite om ni vill.)
Skriv en metod i författarklassen som skriver ut alla författarens böcker.
Skriv en metod i författarklassen som sorterar hens böcker på titel.
Skriv en metod i författarklassen som sorterar hens böcker på utgivningsår.

*/

class Book {
    constructor(title, pages = 0, publishing_year = 0, genre = []) {
        this.title = title;
        this.pages = pages;
        this.publishing_year = publishing_year;
        this.genre = genre;
    }

    print() {
        console.log(this.title + ", " + this.pages + " sidor, kategorier: " + this.genre.join(', ') );
    }

    static sort_by_title(book_a, book_b) {
        if ( book_a.title < book_b.title ) {
            return -1;
        }

        if ( book_a.title > book_b.title ) {
            return 1;
        }

        return 0;
    }

    static sort_by_year(book_a, book_b) {
        return book_a.publishing_year - book_b.publishing_year;
    }
}

class Author {
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
        this.books = [];
    }

    add_book(add_title, add_pages = 0, add_publishing_year = 0, add_genre = []) {
        this.books.push(new Book(add_title, add_pages, add_publishing_year, add_genre));
    }

    print() {
        for (let current_book of this.books) {
            current_book.print();
        }
    }

    sort_by_title() {
        this.books.sort(Book.sort_by_title);
    }

    sort_by_year() {
        this.books.sort(Book.sort_by_year);
    }
}

let authors = [];
authors.push(new Author("Astrid Lindgren", 80));
authors.push(new Author("John Grisham", 55));

authors[0].add_book("Mio, min Mio", 123, 1970, ['äventyr', 'barn']);
authors[0].add_book("Ronja Rövardotter", 234, 1980, ['äventyr', 'barn']);
authors[0].add_book("Karlsson på taket", 215, 1978, ['barn']);

authors[1].add_book("Pelikanfallet", 520, 1997, ['roman', 'advokater']);
authors[1].add_book("Firman", 440, 1998, ['roman', 'advokater']);

for (let current_author of authors) {
    console.log("Namn: " + current_author.name);
    console.log('---------------');
    console.log("Böcker (efter tillagd):");
    current_author.print();
    console.log('---');

    current_author.sort_by_title();
    console.log("Böcker (efter titel):");
    current_author.print();
    console.log('---');

    current_author.sort_by_year();
    console.log("Böcker (efter utgivningsår):");
    current_author.print();

    console.log('---------------');
}
