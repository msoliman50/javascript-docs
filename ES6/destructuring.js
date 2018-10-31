/*
    It may sounds like the spread syntax but, it's not
    Destructuring allow you to take single elements and assing them to new variables
    and it's working with arrays and objects as well

*/

// Array Destructring
const names = ['Mahmoud', 'Soliman', 'Moussa'];
[firstName, ,lastName] = names;
console.log(firstName, lastName);

// Object Destructuring
const person = {
    name: 'Mahmoud',
    job: 'Software Engineer',
    age: 25
};
// {job, age} = person;
// console.log(job, age);