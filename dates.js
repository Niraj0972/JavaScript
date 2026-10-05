let myDate = new Date();

console.log(typeof myDate);
console.log(myDate);
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());


// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString());


let createMyDate = new Date(2023,9,19)    
let createMyDate2 = new Date(2023,9,19,5,3)    
let createMyDate3 = new Date("2023-10-19")    
let createMyDate4 = new Date("10-19-2023")    


// console.log(createMyDate.toString());
// console.log(createMyDate2.toDateString());
// console.log(createMyDate2.toLocaleString());
// console.log(createMyDate3.toLocaleString());
// console.log(createMyDate4.toLocaleString());


let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(createMyDate.getTime()); // get time in milliseconds
console.log(Math.floor(myTimeStamp / 1000)); // get time in seconds

console.log(myDate.toLocaleString('Default',{
    weekday: 'long',
    month: 'long',
    year: 'numeric'
}));
