class Test {
    constructor(some_function) {
        some_function();
    }
}

let test_function = function() {
    console.log("Testing");
}

// test_function();

let obj = new Test(test_function);
