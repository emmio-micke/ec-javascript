function divide(x, y) {
    if (0 == y) {
        throw new Error("Divide by zero")
    }
    return x / y;
}

try {
    console.log(divide(6, 0));
} catch (error_obj) {
    console.log(error_obj)
}
