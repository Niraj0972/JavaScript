console.log(2>1)
console.log(2<1)
console.log(2>=1)
console.log(2<=1)
console.log(2==1)
console.log(2!=1)

// console.log("2" > 1) avoid this type of comparision as it will give unexpected result because of type coercion. It will convert string to number and then compare it. So it is better to use strict equality operator (===) and strict inequality operator (!==) for comparision.
// console.log(2 > "1")

// console.log(null > 0)
// console.log(null == 0)    avoid this type of comparision 
// console.log(null >= 0)

// console.log(undefined > 0)
// console.log(undefined == 0)
// console.log(undefined >= 0)

// Strict comparision operator cause it checks both value and datatype of the variable. 
console.log(2 === 1)
console.log(2 !== 1)


