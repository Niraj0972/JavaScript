const user = {
    username : "Niraj",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website.`);
        // console.log(this);
        
    }
}

// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();

// console.log(this);

// function chai(){ 
//     let username = "Niraj"
//     console.log(this.name);
// }
// chai()

const chai = () => {
    let username = "Niraj"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 ;
// }

// const addTwo = (num1, num2) => num1 + num2 ;

// const addTwo = (num1, num2) => (num1 + num2) ;

const addTwo = (num1, num2) => ({username : "Niraj"}); // for objects we have to use paranthesis

console.log(addTwo(2,4));


