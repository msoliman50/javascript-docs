/*
    A very handy operator ... this is the spread/rest operator
    depending on the usage it'll spread or rest

*/


/*          using ... as Spread Operator            */

// we spread the old array elements to be individual elements in the new array
const oldArray = ['Mahmoud', 'Soliman'];
const newArray = [...oldArray, 'Moussa', 'Mahmoud'];
console.log('Arrays :', oldArray, newArray);


// same apply for objects
const obj1 = {name: 'Mahmoud', age: 25};
const obj2 = {job: 'Software Engineer', ...obj1};

console.log('Objects :',obj1, obj2);

/*          using ... as Rest Operator            */

// we merge all the sent arguments into the args array
const sortNames = (...args) => args.sort();

console.log(sortNames('Nader', 'Ali', 'Karem', 'Zyad'))

