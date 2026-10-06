const myArr = [1,2,3,4,5] 

const myHero = ["Iron Man", "Captain America", "Thor", "Hulk"] 

const myArr2 = new Array(1,2, "Hello", 3,"World")

// console.log(myArr);
// console.log(myArr[2]);
// console.log(myHero);
// console.log(myArr2);

// Array Methods

myArr.push(6) // add to the end of the array
// console.log(myArr);
myArr.push(7);
// console.log(myArr);

myArr.pop(); // remove the last element of the array
// console.log(myArr);


myArr.unshift(0); // add to the beginning of the array
// console.log(myArr);

myArr.shift();// remove the first element of the array
// console.log(myArr.shift()); 
// console.log(myArr);

// console.log(myArr.length); 

// console.log(myArr.includes(3)); 

// console.log(myArr.indexOf(5)); 

const myArr3 = [1,2,3,4,5,6,7,8,9]
const newArr = myArr3.slice(2,8)//exclude last element

// console.log("A", myArr3);
// console.log("B", newArr);

const newArr2 = myArr3.splice(2,7)// remove elements from the array and return them
// console.log("A", myArr3)
// console.log("C", newArr2); 


const arr3 = myArr.join() // convert array to string

// console.log(myArr);
// console.log(arr3);
// console.log(typeof arr3);


const marvel_heros = ["Iron Man", "Captain America", "Thor", "Hulk"] ;

const dc_heros =["Superman", "Flash", "Batman"];

// marvel_heros.push(dc_heros); //it push dc_heros as array
// console.log(marvel_heros);
// console.log(marvel_heros[4]);

const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros)

const newHeros = [...marvel_heros, ...dc_heros]
// console.log(newHeros)

const anotherArray = [1,2,3,[4,5,6,7,[6,7,[4,5]]]];
// console.log(anotherArray)

const realArr = anotherArray.flat(Infinity)
// console.log(realArr)

console.log(Array.isArray("Niraj"))
console.log(Array.from("Niraj"))
console.log(Array.from({name : "Niraj"}))

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

const score = Array.of(score1,score2,score3,score4)
console.log(score)