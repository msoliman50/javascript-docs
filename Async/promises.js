console.log('%c Promises', 'color: green; font-size:30px');

// using vanilla JS
function getStudents(url) {

    return new Promise((resolve, reject) => {

        // initialize the request
        var http = new XMLHttpRequest();
        http.open('GET', url);
        
        // request done with success or failure
        http.onload = function() {
            
            // success request
            if(http.status === 200) {
                resolve(JSON.parse(http.response).students);
            }else{ // failed request
                reject(http.statusText);
            }

        };
        
        // send the request
        http.send();
    });

}


// using JQuery JS
function getStudentsJQuery(url) {

    return new Promise((resolve, reject) => {

        // initialize the request
        $.ajax({
            type: 'GET',
            url: url,
            success: function(data) { // success request
                resolve(data.students);
            },
            error: function(jqXHR, status, error) { // failed request
                reject(error);
            }
        });
        
    });

}


// consuming the promise
// var studentsPromise = getStudents('data/studentss.json'); // using vanilla JS
var studentsPromise = getStudentsJQuery('data/students.json'); // using JQuery

 // then with onFulfilled & onRejected callback
// studentsPromise.then((students) => {
//     console.log('%c onFulfilled', 'color:purple; font-size:15px;');
//     console.table(students);
// }, (errorMessage) => {
//     console.log('%c onRejected', 'color:purple; font-size:15px;');
//     console.log(errorMessage);
// });

// then with catch for chaining
studentsPromise.then((students) => {
    console.log('%c onFulfilled', 'color:purple; font-size:15px;');
    console.table(students);

    // promise chanining
    return getStudents('data/students.json');

}).then((students) => {

    console.log('%c onFulfilled 2', 'color:purple; font-size:15px;');
    console.table(students);

}).catch((errorMessage) => {

    console.log('%c onRejected', 'color:purple; font-size:15px;');
    console.log(errorMessage);

});



// using JQuery with the built-in promises

$.get('data/students.json').then((students) => {

    console.log('%c onFulfilled', 'color:purple; font-size:15px;');
    console.table(students);

    return $.get('data/students.json');

}).then((students) => {

    console.log('%c onFulfilled 2', 'color:purple; font-size:15px;');
    console.table(students);

}).catch((errorMessage) => {

    console.log('%c onRejected', 'color:purple; font-size:15px;');
    console.log(errorMessage);

})