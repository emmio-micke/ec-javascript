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

        for ( let dice_counter = 0; dice_counter < no_of_dice; dice_counter++ ) {
            this.dice_objects.push(new Die());
        }
    }

    throw() {
        for ( let current_dice of this.dice_objects ) {
            current_dice.throw();
        }
    }
}

let dice_example = new Dice();
console.log(dice_example);

dice_example.throw();
console.log(dice_example);
