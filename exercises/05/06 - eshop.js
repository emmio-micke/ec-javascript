class Stock {
    constructor() {
        this.products = [];
    }

    add_product(product) {
        this.products.push(product);
    }

    inventory() {
        console.log("All products");
        for ( let product of this.products ) {
            product.print();
        }
    }
}

class Product {
    constructor(title, no_in_stock) {
        this.title = title;
        this.no_in_stock = no_in_stock;
    }

    print() {
        console.log(this.title + ' - ' + this.no_in_stock);
    }
}

let stock = new Stock();

let jacket = new Product("Jacket", 4);
let pants = new Product("Pants", 5);
let shoes = new Product("Shoes", 12);

stock.add_product(jacket);
stock.add_product(pants);
stock.add_product(shoes);

stock.inventory();
