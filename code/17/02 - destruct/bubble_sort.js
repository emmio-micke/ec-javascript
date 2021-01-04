let numbers = [3, 2, 7, 10, 8];

let found = true;

while (found) {
    found = false;
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
            [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];

            found = true;
        }
    }
}

console.log(numbers);
