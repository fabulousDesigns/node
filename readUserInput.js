const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your name? ', (answer) => {
  console.log(`Hello : ${answer}`);
  rl.close();
});