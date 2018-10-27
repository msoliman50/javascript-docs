/*
    I'm sure you're already know what's classes, objects, inheritance, ... (other OOP fundamentals)
    Class: is the blueprint
    Object: is an instance of the blueprint
    Inheritance: the ability to aquire properties and methods from the parent
*/

class Employee {
    constructor(name) {
        this.name = name;
    }

    printInfo() {
        console.log('Employee name is:', this.name);
    }
}
  
class Engineer extends Employee {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
    printTitle() {
        console.log('Working as:', this.title);
    }
}

const mahmoud = new Engineer('Mahmoud Soliman', 'Software Enginner');
mahmoud.printInfo(); // inherited one
mahmoud.printTitle();