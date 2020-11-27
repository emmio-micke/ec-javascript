const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name ? ", function saveInput(name) {
  console.log(`Name is ${name}`);
});

rl.question("What is your age ? ", function saveInput(age) {
  console.log(`Age is ${age}`);
  rl.close();
});

rl.on("close", function saveInput() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});