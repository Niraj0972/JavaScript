const accountId = 101
let accountEmail = "Niraj@gmail.com"
var accountPassword = "12345"
accountCity = "Nashik"
let accountState 

console.log(accountId)

// accountId = 102 this will give error because accountId is declared as const
accountEmail = "niraj@gmail.com"
accountPassword = "654332"
console.table({accountId, accountEmail, accountPassword, accountCity, accountState})