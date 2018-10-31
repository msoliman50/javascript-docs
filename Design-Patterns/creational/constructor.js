// by addig "new" keyword in front of a function it will turn it into constructor function
// so this will:
// 1- creates a brand new object
// 2- links to an object prototype
// 3- binds 'this' to the new object scope
// 4- implicitly returns this

// example without prototype
// function Task(title, description) {
//     this.title = title
//     this.description = description;
//     this.isCompleted = false;
//     this.complete = function() {
//         console.log('completing task:', this.title);
//         this.isCompleted = true;
//     }
// }

// now to create methods efficiently we will put them all in the Task's Prototype
// so whenever we create new instance/copy of Task it will just be linked to the prototype
// instead of creating copies of methods each time we create new instance
// So all instances will point to single place instead of having multiple copies

// example with prototype
function Task(title, description) {
    this.title = title
    this.description = description;
    this.isCompleted = false;
}

Task.prototype.complete = function() {
    console.log('completing task:', this.title);
    this.isCompleted = true;
};

const t1 = new Task('Task 1', 'Description 1');
const t2 = new Task('Task 2', 'Description 2');
const t3 = new Task('Task 3', 'Description 3');

t1.complete();
t2.complete();
console.log(t3);

