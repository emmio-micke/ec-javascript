class Product {
    constructor(sku, title, description, amount, price) {
        this.sku = sku;
        this.title = title;
        this.description = description;
        this.amount = amount;
        this.price = price;
    }

    printProduct() {
        console.log(`Article Number: ${this.sku} | Product: ${this.title} | Info: ${this.description} | In-Stock: ${this.amount} | Price: ${this.price}`);
    }

}

class Clothes extends Product {
    constructor(sku, title, description, amount, price, size) {
        super(sku, title, description, amount, price)
        this.size = size;
    }

    printProduct() {
        console.log(`Article Number: ${this.sku} | Product: ${this.title} | Info: ${this.description} | In-Stock: ${this.amount} | Price: ${this.price} | Size: ${this.size}`);
    }

}

class Toys extends Product {
    constructor(sku, title, description, amount, price, from_age) {
        super(sku, title, description, amount, price);
        this.from_age = from_age;
    }

    printProduct() {
        console.log(`Article Number: ${this.sku} | Product: ${this.title} | Info: ${this.description} | In-Stock: ${this.amount} | Price: ${this.price} | From age: ${this.from_age}`);
    }
}

class Stock {
    constructor() {
        this.productsArray=[]
    }

    add_product(product) {
        this.productsArray.push(product);
    }

    print_inventory () {
        let allItems = this.productsArray.map(value => 'Product number: ' + value.sku + ', Product title: ' + value.title + ', No left in stock: ' + value.amount);
        console.log(allItems);
    }

    search_product(sku) {
        let search = this.productsArray.find(element => element.sku === sku);
        console.log(search);
    }
}

class Customer {
    constructor(name) {
        this.name = name;
        this.current_cart = new Cart();
        this.order_history = [];
    };

    buy() {
        for (let value of this.current_cart.cartArray) {
            this.order_history.push({Benämning: value.title, Artikelnr: value.sku, Pris: value.price, Datum: new Date()
            });
        }
    };
};

class Cart {
    constructor() {
        this.cartArray = []
    };

    print_cart() {
        console.log(this.cartArray);
    };

    sum_cart() {
        let sum = this.cartArray.reduce(((acc, currVal) => acc + currVal.price), 0);
        return sum;
    };

    add_to_cart(product) {
        this.cartArray.push(product);
    };

    remove_from_cart(product) {
        if (this.cartArray.indexOf(product) === -1) {
            console.log("Product not in cart!")
        } else {
            let removeIndex = this.cartArray.indexOf(product);
            this.cartArray.splice(removeIndex, 1);
        };
    };



}



let stock = new Stock();

let shoes = new Clothes(123456, "Blåa Skor", "Blå blå, blåa skor", 25, 499, "38");
let hoodie = new Clothes(123457, "Hoodie", "Svart hoodie med vitt tryck", 43, 399, "L");
let t_shirt = new Clothes(123458, "T-Shirt", "Randig T-Shirt", 63, 199, "S");
let jeans = new Clothes(123459, "Jeans", "Svarta jeans", 36, 699, "XS");
let teddy = new Toys(123460, "Nallen", "Stor, fluffig och mysig", 88, 499, 1);
let toy_car = new Toys(123461, "Leksaksbilen", "Röd cheva", 25, 69, 5);

stock.add_product(shoes);
stock.add_product(hoodie);
stock.add_product(t_shirt);
stock.add_product(jeans);
stock.add_product(teddy);
stock.add_product(toy_car);

//stock.print_inventory()
//stock.search_product(123461);

let angelika = new Customer("Angelika")
angelika.current_cart.add_to_cart(shoes);
angelika.current_cart.add_to_cart(teddy);
console.log(angelika.current_cart);
//angelika.current_cart.remove_from_cart(teddy);
//console.log(angelika.current_cart);

//console.log(angelika.current_cart.sum_cart());

angelika.buy();
//console.log(angelika.order_history);

