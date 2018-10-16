console.log('%c Callbacks Better Organizing', 'color: green; font-size:30px');

// 1st callback
$.ajax({
    type: 'GET',
    url: 'data/students.json',
    success: firstCallBack,
    error: errorHandler
});

// 1st callback success
function firstCallBack(data) {

    console.log('1st Callback');

    // 2nd callback
    $.ajax({
        type: 'GET',
        url: 'data/students.json',
        success: secondCallBack,
        error: errorHandler
    })

}

// 2nd callback success
function secondCallBack(data) {

    console.log('2nd Callback');

    // 3rd callback
    $.ajax({
        type: 'GET',
        url: 'data/students.json',
        success: function(data) {
            console.log('3rd Callback');
        },
        error: errorHandler
    });
}

// error handler
function errorHandler(jqXHR, textStatus, error) {
    console.log('callback error', error);
}
