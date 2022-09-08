const {readFileSync, writeFileSync} = require('fs')
// read file1 && file 2
const readFile1 = readFileSync('./content/readFile1.txt', 'utf-8')
console.log(readFile1)
const readFile2 = readFileSync('./content/readFile2.txt', 'utf-8')
console.log(readFile2)
// write to file
writeFileSync(
    './content/main.sync.txt', `Here is the result ${readFile1},${readFile2}`
)
