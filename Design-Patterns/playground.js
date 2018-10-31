/*          Object Creation         */
// let task = Object.create(Object.prototype);
// let task = {};
// let task = new Object();

// task.title = 'My Title';
// task.description = 'My Description';


// task.toString = function() {
//     return this.title + ' ' + this.description; 
// }

// console.log(task.toString());


/*          ES5 define property         */
let task = {
    title: 'My Title',
    description: 'My Description'
};

Object.defineProperty(task, 'toString', {
    value: function() { // value of property
        return this.title + ' ' + this.description;
    },
    writable: false, // could be override or not
    enumerable: false, // appears on the object keys or not
    configurable: true // the property could be re-defined by defineProperty method again or not
});

console.log(task.toString())

// writable prevent this action
task.toString = 'Hi';
console.log(task.toString()) // if writable: true will throw and error toString is not a function

// enumerable
console.log(task); // if enumerable: true will apear in the object
// or 
console.log(Object.keys(task)); // if enumerable: true will apear in the keys

// configurable
Object.defineProperty(task, 'toString', { // if configurable: false this will throw an error
    value: 'Hey!'
});




