console.log('%c Callbacks', 'color: green; font-size:30px');


// Synchronous Callback
var fruits = ['apple', 'banana', 'orange', 'pear'];

let callback = (f, index) => {
    console.log(`at index ${index}: ${f}`);
}

console.log('%c Synchronous Callback', 'color:purple; font-size:15px;');
fruits.forEach(callback);
console.log('continue work normally'); // to prove the Async nature


// Asynchronous Callback
console.log('%c Asynchronous Callback', 'color:purple; font-size:15px;');
$.get('data/students.json', data => console.table(data.students)) // ES6 arrow function
console.log('continue work normally'); // to prove the Async nature


// Callback Problem: 'Callback Hell'
console.log('%c Callback Hell', 'color: red; font-size:30px');

// 1st callback
$.ajax({
    type: 'GET',
    url: 'data/students.json',
    success: (data1) => {

        if(data1) {
            console.log('1st Callback');

            // 2nd callback -> assume it calls another file or API
            $.ajax({
                type: 'GET',
                url: 'data/students.json',
                success: (data2) => {

                    if(data2) {
                        console.log('2nd Callback');

                        // 3rd callback -> assume it calls another file or API
                        $.ajax({
                            type: 'GET',
                            url: 'data/students.json',
                            success: (data3) => {

                                if(data3) {
                                    console.log('3rd Callback');
                                }

                            },
                            error: (jqXHR, textStatus, error) => {
                                console.log('3rd callback error', error);
                            }
                        });


                    }

                },
                error: (jqXHR, textStatus, error) => {
                    console.log('2nd callback error', error);
                }
            });
        }
        


    },
    error: (jqXHR, textStatus, error) => {
        console.log('1st callback error', error);
    }
});

// just another example using $.get instead of $.ajax

// // 1st callback
// $.get('data/students.json', (data1) => {

//     if(data1) {
//         console.log('1st Callback');

//         // 2nd callback -> assume it calls another file or API
//         $.get('data/students.json', (data2) => {
            
//             if(data2) {
//                 console.log('2nd Callback');

//                 // 3rd callback -> assume it calls another file or API
//                 $.get('data/students.json', (data3) => {

//                     if(data3) {
//                         console.log('3rd Callback');
//                     }
//                 });
//             }
//         })
//     }
// });



