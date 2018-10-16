console.log('%c AJAX Requests', 'color: green; font-size:30px');

// vanilla JS

/*
    Ready States
    0: request not initialized
    1: request has been set up
    2: request has been sent
    3: request is in process
    4: request is complete

*/


var http = new XMLHttpRequest(); // ready state = 0
http.open('GET', 'data/students.json', true); // ready state = 1
http.send(); // ready state = 2

// watch the ready state
http.onreadystatechange = function() {
    if(http.readyState === 4 && http.status === 200) {
        console.log('%c Vanilla JS way', 'color:purple; font-size:15px;');
        console.table(JSON.parse(http.response).students);
    }
}

console.log('continue work normally - Vanilla JS'); // to prove the Async nature



// JQuery

$.get('data/students.json', function(data){

    console.log('%c JQuery way', 'color:purple; font-size:15px;');
    console.table(data.students);

});

console.log('continue work normally - JQuery'); // to prove the Async nature

