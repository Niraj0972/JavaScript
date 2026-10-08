// function addTwoNumbers(num1, num2){
//      console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2){
    //  let result = num1 + num2
     return num1 + num2
}

const result = addTwoNumbers(2,4)

// console.log("Result " ,result);

function loginUserMessage(username = "Sam"){
    // if(!username){
    //     console.log("Please enter username.")
    //     return
    // }
    return `${username} just logged in.`
}
// console.log(loginUserMessage())
// console.log(loginUserMessage("Niraj"))

function  calculateCartPrice(val1,val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200,400,100,500,700));

const user = {
    name:"Niraj",
    age : 22
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
}

handleObject(user);
handleObject({
     name:"Raj",
    age : 24
});

const myArray = [1,2,3,4,5,6,7]

function handleArray(anyarray){
    return anyarray[3];
}
console.log(handleArray(myArray));
console.log(handleArray([10,20,30,40,50,60]))



