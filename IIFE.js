// IIFE (Immediately Invoked Function Expressions)

(function demo(){
    console.log(`DB CONNECTED`);
})();

(() => {
    console.log(`DB CONNECTED TWO`); 
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`); 
})('Niraj')

