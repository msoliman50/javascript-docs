// literals Objects
var s1 = {
    firstName: 'Mahmoud',
    secondName: 'Ali',
    GPA: 2.2,
    login: function() { // normal function
        console.log(this.firstName, 'has logged in');
    },
    logout() { // ES6 new syntax
        console.log(this.firstName, 'has logged out');
    }
};

var s2 = {
    firstName: 'May',
    secondName: 'Omar',
    GPA: 7.9,
    login: function() { // normal function
        console.log(this.firstName, 'has logged in');
    },
    logout() { // ES6 new syntax
        console.log(this.firstName, 'has logged out');
    }
};

console.log(s1.login());
console.log(s2.login());

// access and update properties

// using dot notation
s2.firstName = 'Rasha';
console.log(s2);

// using square bractes and dynamic access property
var prop = 'firstName';
s1[prop] = 'Noor';
console.log(s1.prop); // illegal, prop doesn't exist, if s1.prop = anything will create this new prop


// add new props and methods
s1.testNew = () => {
    console.log('test adding methods dynamically');
};

console.log(s1);


