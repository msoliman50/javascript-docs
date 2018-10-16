// constructor function -> emulate class
function Student(first_name, last_name, gpa) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.gpa = gpa;

    // not recommended way
    // this.login = function() {
    //     console.log(this.first_name, 'has logged in');
    // }
}

// prototype

Student.prototype.login = function() {
    console.log(this.firstName, 'has logged in');
};

Student.prototype.logout = function() {
    console.log(this.firstName, 'has logged out');
}


var s1 = new Student('Mahmoud', 'Ali', 2.4);
debugger;


// inheritance

// function Foriegn(first_name, last_name, gpa, country, language) {
//     Student.apply(this, [first_name, last_name, gpa]);
//     this.country = country;
//     this.language = language;
// }

// could be in this way
function Foriegn(country, language, ...args) {

    Student.apply(this, args);
    this.country = country;
    this.language = language;
}


// prototype

// wrong way because it will share reference
// Foriegn.prototype = Student.prototype; 
Foriegn.prototype = Object.create(Student.prototype);

Foriegn.prototype.living = function() {
    console.log(this.firstName, 'was living in', this.country);
}

var fs = new Foriegn('Ghana', 'French', 'Yaya', 'Yakob', 1.4);

console.log(fs);
console.log(s1);


debugger;
