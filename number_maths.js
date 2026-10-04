const score = 100
// console.log(score)

const balance = new Number(100)
// console.log(balance)
console.log(typeof balance)

// console.log(balance.toString())
// console.log(balance.toString().length)

const value = 123.78523456543

// console.log(value.toFixed(2))

// console.log(value.toPrecision(3))

const hundreds = 10000000000000

// console.log(hundreds.toLocaleString('en-US'))
console.log(hundreds.toLocaleString('en-IN')) 

// ************************************************************************

// Math Object

console.log(Math)

console.log(Math.PI)
console.log(Math.abs(-5))
console.log(Math.round(6.7))
console.log(Math.floor(6.7))
console.log(Math.ceil(6.2))
console.log(Math.min(1,2,3,4,5))
console.log(Math.max(1,2,3,4,5))

console.log(Math.random())
console.log(Math.random() * 10 + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max -min +1)) + min)