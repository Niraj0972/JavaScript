const name = "Niraj"
const repoCount = 10

console.log(name + repoCount) //this is not good practice because it will give unexpected result.

// this is modern way of string concatenation using template literals. 
// It is more readable and easier to use.
console.log(`Hello ${name} you have ${repoCount} repo`) 

const gameName = new String ("Niraj-Dattatrey-Birari")

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("D"))

const newString = gameName.substring(8,12)
console.log(newString)

const anotherString = gameName.slice(-18,15)
console.log(anotherString)

const string12 = "   Hello Niraj   "
console.log(string12)
console.log(string12.trim())

const url = "https://nirajbirari.com/learn%20javascript"
console.log(url.replace('%20','-'))

console.log(gameName.includes("Niraj"))

console.log(gameName.split("-"))


