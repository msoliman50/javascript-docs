class Student {
    
    constructor(firstName, lastName, gpa) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gpa = gpa;

        console.log('Student constructor is called');
    }

    login() {
        console.log(this.firstName, 'has logged in');
        return this;
    }

    logout() {
        console.log(this.firstName, 'has logged out');
        return this;
    }

    incGPA() {
        this.gpa++;
        return this;
    }
};

var s1 = new Student('Mahmoud', 'Ali', 2.2);
var s2 = new Student('May', 'Omar', 7.9);

console.log(s1.login(), s2.logout());

// method chanining
console.log(s1.login().incGPA().logout());

// inheritance

class Foriegn extends Student {

    constructor(firstName, lastName, gpa, country, language) {
        super(firstName, lastName, gpa);
        this.country = country;
        this.language = language;
    }

    // login() {
    // 	console.log('this is my own version of login')
    // }

    living() {
        console.log(this.firstName, 'was living in', this.country);

        console.log(students);

        // normal function
        // students = students.filter(function(s) {
        //     return s.gpa > 2;
        // });

        // new ES6 syntax
        students = students.filter(s => s.gpa > 2);

        console.log(students);
    }
}

var s3 = new Foriegn('Yaya', 'Yakobo', 1, 'Ghana', 'French');

let students = [s1, s2, s3];

s3.living();
s3.login();
