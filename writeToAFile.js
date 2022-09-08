const fs = require('fs');
const readline = require('node:readline');

function greetUser(name) {
    return fs.writeFile('test.txt', `Hello ${name}`, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('What is your name? ', (answer) => {
    greetUser(answer);
    rl.close();
  });
