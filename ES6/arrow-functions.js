// normal function could be defined like : function declaration or function expression

// function declaration
function myFun1() {

};

// function expression
myFun2 = function() {

};

/*
    Arrow function is written in a bit shorter syntax, by omit the function keyword and also some
    other features like if you're sending only one argument no need for (). this evantualy could
    allow you to write 3 - 4 lines function in just single line
    it uses thearrow (=>) operator, and It's VERY IMPORTANT TO KNOW THAT it doesn't bind to "this" keyword
    So, No more issues with the this keyword
*/

// normal arrow function
const add = (x, y) => {
    return x + y;
}
console.log(add(5, 3));

// could be writen in one line since we're returning just the summation
// this is so helpful when you're using methods like: filter, find, map, ...etc
const add2 = (x, y) => x + y;
console.log("same result:", add2(5, 3));

// one argument
const printMyName = name => {
    console.log("Hello", name);
}
printMyName('Mahmoud Soliman');


