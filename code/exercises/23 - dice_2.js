/*

Dice part 2

Utgå från den tidigare uppgiften med tärningar.

x Slå tärningarna 10 gånger och skriv ut medelvärdet av tärningarnas värde efter varje slag.
x Skriv ut medelvärdet av de tio kasten.
x Lägg till egenskapen this.dice_values som ska innehålla en array med sex stycken värden.
x Skriv en metod som räknar ut hur många av varje tärningsvärde dina tärningar innehåller, dvs hur många ettor, hur många tvåor osv. Spara resultatet i arrayen dice_values.
x Skriv en metod som kontrollerar om tärningsuppsättningen innehåller en liten stege, dvs en etta, en tvåa, en trea, en fyra och en femma.

*/

class Die {
    constructor() {
        this.value = null;
        this.throw();
    }

    throw() {
        this.value = Math.floor(Math.random() * 6) + 1;
    }
}

class Dice {
    constructor(no_of_dice = 5) {
        this.dice_objects = [];
        this.dice_values = Array(7);

        for (let dice_counter = 0; dice_counter < no_of_dice; dice_counter++) {
            this.dice_objects.push(new Die());
        }

        this.throw();
    }

    saveData() {
        for (let i = 1; i <= this.noOfPlayers; i++) {
            this.inputValues = JSON.stringify(
                Array.from(document.querySelectorAll(`.player${i}`)).map((element) =>
                    Number(element.value)
                )
            );
            localStorage.setItem(`p${i}Key`, this.inputValues);
        }
    }

    getdata() {
        for (let i = 1; i <= this.noOfPlayers; i++) {
            let storage = JSON.parse(localStorage.getItem(`p${i}Key`)); // [2, 4, 3, 15]
            document.querySelectorAll(`.player${i}`)
                .map((element, index) => element.value = storage[index]);

        }
    }

    full_house() {
        let has_two = false;
        let has_three = false;

        let sum = 0;

        for (let i = 1; i < this.dice_values.length; i++) {
            if (this.dice_values[i] === 2) {
                has_two = true;
                sum += (2 * i);
            }

            if (this.dice_values[i] === 3) {
                has_three = true;
                sum += (3 * i);
            }
        }

        return has_two && has_three ? sum : false;
    }

    small_straight() {
        return this.dice_values[1] == 1 &&
            this.dice_values[2] == 1 &&
            this.dice_values[3] == 1 &&
            this.dice_values[4] == 1 &&
            this.dice_values[5] == 1
    }

    large_straight() {
        return this.dice_values[2] == 1 &&
            this.dice_values[3] == 1 &&
            this.dice_values[4] == 1 &&
            this.dice_values[5] == 1 &&
            this.dice_values[6] == 1
    }

    values() {
        this.dice_values.fill(0);
        for (let current_dice of this.dice_objects) {
            this.dice_values[current_dice.value]++;
        }
    }

    throw() {
        for (let current_dice of this.dice_objects) {
            current_dice.throw();
        }
        this.values();
    }
}

let dice1 = new Dice();

console.log(dice1);
console.log(dice1.small_straight());

/*
let sum = 0;
let throws = 10;

for (let i = 1; i <= throws; i++) {
    dice1.throw();

    let sum_current = dice1.dice_objects.reduce((acc, current) => acc + current.value, 0)
    let avg = sum_current / dice1.dice_objects.length;

    sum += avg;

    console.log("Medelvärde: " + avg);
}

let avg = sum / throws;
console.log("Medelvärde alla: " + avg);

*/