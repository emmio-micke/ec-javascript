class Stock {
    constructor() {
        this.products = [];
    }

    add_product(product) {
        this.products.push(product);
    }
}

class Product {
    constructor(title, no_in_stock) {
        this.title = title;
        this.no_in_stock = no_in_stock;
    }

    print() {
        console.log("Printing product");
        console.log(this.title, this.no_in_stock);
    }
}

let stock = new Stock();

let jacket = new Product("Jacket", 4);
jacket.print();

stock.add_product(jacket);

