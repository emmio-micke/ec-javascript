function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return (n * factorial(n - 1));
    }
}

console.log(factorial(2));

// 1 * 2
/*

function factorial(n = 1) {
    if (n <= 1) {
        return 1;
    } else {
        return (n * factorial(n - 1));
    }
}

function factorial(n = 2) {
    if (n <= 1) {
        return 1;
    } else {
        return (n * factorial(1)); // 2 * 1 = 2
    }
}

function factorial(n = 3) {
    if (n <= 1) {
        return 1;
    } else {
        return (n * factorial(2)); // 3 * 2 = 6
    }
}

function factorial(n = 4) {
    if (n <= 1) {
        return 1;
    } else {
        return (n * factorial(3)); // 4 * 6 = 24
    }
}

function factorial(n = 5) {
    if (n <= 1) {
        return 1;
    } else {
        return (n * factorial(4)); // 5 * factorial(4) = 5 * 24
    }
}

// 5 * 4 * 3 * 2 * 1

console.log(factorial(5));
*/