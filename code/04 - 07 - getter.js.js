class Test {
    constructor() {
        this.log = ['a', 'b', 'c'];
    }

    get latest() {
        if (this.log.length === 0) {
            return undefined;
        } else {
            return this.log[this.log.length - 1];
        }
    }
}

let obj = new Test();

console.log(obj.latest);