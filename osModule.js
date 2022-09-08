const OS = require('os')

const osType = OS.type()
const osVersion = OS.version()
const upTime = OS.uptime()
 
console.log(`Your Computer Name is ${osType} version ${osVersion} upTime ${upTime}`)

