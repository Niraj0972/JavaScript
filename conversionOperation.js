let score = "12"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber)

/*
"12" - 12
"12as" - NaN
true - 1 , false - 0
*/

let isloggedIn = "Niraj"

let valueIsLoggedIn = Boolean(isloggedIn)
console.log(valueIsLoggedIn)
console.log(typeof valueIsLoggedIn)

/*
1 - true
0 - false
"" - false
"Niraj" - true
*/

let string = true

let valueInString = String(string)
console.log(valueInString)
console.log(typeof valueInString)
