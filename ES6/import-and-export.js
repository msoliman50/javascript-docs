/*
    It's a way of organizing your code and introduce dependencies between your Javascript files
    So, you can make a set of helper function in helper.js for example then exporting this file.
    And Whenever you need to use those function you can import that file and use them.
    This feature is a great room for DRY (Don't Repeat Yourself) princeple 
*/


// default import and export
/*
    inside person.js file:
    export default Person (for instance, Person is just an Object)

    inside other file: [Note: you can choose the name freely]
    import person from './person.js' or import prs from './person.js'

*/

// named import and export
/*
    inside utility.js file:
    export const func = () => {}
    export const Age = 25;

    inside other file: [Note: you need to use the same name or make alias]
    import {func} from './utility.js' or import {func as MyFunc} from './utility.js'

    // you can use , to import multiple things
    import {func, Age} from './utility.js'

    // you can import everything using *
    import * as utility from './utility.js'

*/