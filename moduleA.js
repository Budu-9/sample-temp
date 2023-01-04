const names = require('./module1')
const sayHi = require('./module2')
const data = require('./module3')
require('./module-mind-grenade')

console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.linda)