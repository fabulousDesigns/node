// path separator
const path = require('path')
const separator = path.sep
console.log(separator)
// full path
const filePath = path.join('content','sub-content','test.txt')
console.log(filePath)
// baseName
const base = path.basename(filePath)
console.log(base)
// absolutePath
const absolutePath = path.resolve(__dirname,'content','sub-content','test.txt')
console.log(absolutePath)
