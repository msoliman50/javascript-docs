/*
    to define variables we used to use var keyword, but since var has some issues with the scope
    ES6 defines 2 new keywords to deal with variables
    
    1- const: to define contant, one assigned will never change
    2- let: to define the normal variable [Note: with some scope guarantee than var] 
*/


// let example
let name = 'Mahmoud';
console.log(name); // nothing new than var

name = 'Soliman'; // chaning the value normally
console.log(name);



// const example
const myName = 'Mahmoud';
console.log(myName); // nothing new than let

// myName = 'Soliman'; // this will give you an error
console.log(myName); 

