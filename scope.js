const a = 20

if(true){
    let a = 10; 
    const b = 20; 
    var c = 30; 
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "Niraj"

    function two(){
        const website = "Youtube"
        console.log(username); //you can access outer function's variable
    }
    // console.log(website); // Outer func can't acces inner function's variable
    two()
}
one()

if(true){
    const username = "Niraj"
    if(username === "Niraj"){
        const website = " Google"
        console.log(username + website);  
    }
    // console.log(website);
}
// console.log(username);

// ****************** Interesting *****************************

console.log(addOne(5))
function addOne(num) // this is function declaration,so calling it before declaration is allowed
{
    return num + 1;
}

// console.log(addTwo(5)) 
// this is function expression stored in variable addTwo, 
// so it can;t accessed before initialization
const addTwo = function(num)
{
    return num + 2;
}
console.log(addTwo(5))
