// Singleton object
// Object.create
// const obj = new Object()

// Object literals

const mySym = Symbol("key1")

const JSUser = {
    name :"Niraj",
    "full name" : "Niraj Birari",
    [mySym] :"key1",
    email : "niraj@gmail.com",
    age : 22,
    location: "Nashik",
    isLoggedIn : true,
    lastLoginInDays : ["Mon", "Fri","Sat"]
}


// console.log(JSUser);
// console.log(JSUser.lastLoginInDays);
// console.log(JSUser.email); // mostly use this method to access object elements
// console.log(JSUser["email"]);
// console.log(JSUser."full name");
// console.log(JSUser["full name"]);


// console.log(JSUser[mySym]);
// console.log(typeof JSUser[mySym]); // Value stored in Symbol is consider as string
// console.log(typeof mySym); 

JSUser.email = "niraj@google.com"
// Object.freeze(JSUser); // after this object become immutable
JSUser.email = "niraj@microsoft.com"
// console.log(JSUser.email);


JSUser.greeting = function(){
    console.log("Hello User");
}

JSUser.greeting2 = function(){
    console.log(`Hello ${this.name}`);
}

// console.log(JSUser.greeting());
// console.log(JSUser.greeting2());

// ********************************************************************************************************

const tinderUser = {}

tinderUser.id = 123
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email : "h@gmail.com",
    fullname :{
        userfullname : {
            firstname : "Niraj",
            lastname : "Birari"
        }
    }
}

console.log(regularUser.fullname.userfullname);


const obj1 = {1 : "a",2: "b"}
const obj2 = {3 : "",4: "d"}

const obj3 = Object.assign({}, obj1, obj2)

const obj4 = {...obj1 , ...obj2}

console.log(obj3);
console.log(obj4);

const user = [
    {},
    {},
    {},
    {}
]

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));


