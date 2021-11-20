// Modules- Encapsulated Code (only share minimum)
// CommonJS- every file is module (by default)
const names = require('./app4')
const syHi = require('./app5')

syHi(names.john)
syHi(names.peter)
