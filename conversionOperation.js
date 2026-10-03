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


// Operations

let num = 3
let negNum = -num
console.log(negNum)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2)

console.log(+true)
// console.log(true+) this will give error

let str1 = "Hello"
let str2 = " Niraj"
let str3 = str1 +  str2
console.log(str3)
console.log("str1" +  str2)

// console.log(1 + 2)
// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + "2")
// console.log("1" + 2 + 3)
// console.log(1 + 2 + "3")

let counter = 100
counter ++ // increment after using the value
console.log(counter)
++counter // increment before using the value
console.log(counter)

