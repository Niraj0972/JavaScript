let age = 18
let name = "Niraj"
let isLoggedIn = true
let price = 999999999999999999999999999999999999999999999
let state 
let x = null

console.table({age, name, isLoggedIn, price, state, x})

console.log(typeof age)
console.log(typeof name)
console.log(typeof isLoggedIn)
console.log(typeof price)
console.log(typeof state)
console.log(typeof x)

/*
Primitives in JavaScript :
number - 18
string - ""
boolean - true or false
bigint - 999999999999999999999999999999999999999999999
undefined - not defined
null - standalone value that represents nothing
symbol - unique and immutable primitive value
*/

let student = {
    name : "Niraj",
    age : 18
}

let array = [1,2,3,4,5]


let a=2
let b=3

function add(a,b){
    return a+b
}

console.log(add(a,b))

/*
Non-primitives in JavaScript :

object - collection of key-value pairs
array - ordered list of values
function - block of code that can be called and executed


*/

console.log(typeof "Niraj");          // string
console.log(typeof 25);               // number
console.log(typeof 25.5);             // number
console.log(typeof true);             // boolean
console.log(typeof undefined);        // undefined
console.log(typeof null);             // object
console.log(typeof 123n);             // bigint
console.log(typeof Symbol("id"));     // symbol

console.log(typeof {});               // object
console.log(typeof []);               // object
console.log(typeof function() {});    // function


// ******************************************************************************************
// Stack(primitives) and Heap(non-primitives) memory allocation in JavaScript

let name1 = "Niraj"
let name2= name1

name2 = "Akshay"
console.log(name1)
console.log(name2)

let student1 = {
    name : "Neha",
    email :"neha@gmail.com"
}

let student2 = student1

student2.name = "Sneha"

console.log(student1.name)
console.log(student2.name)
