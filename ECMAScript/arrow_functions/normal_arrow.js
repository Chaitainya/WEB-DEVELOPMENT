// Normal Function

function f1()
{
    return "Hello World";
}
console.log(f1()); // Hello World

// Arrow Function

var x = () => "Hello World";
console.log(x());  // Hello World

// When it comes to 'Arrow Function', it follows the syntax of Function Expression.
// If a variable stores a function as value is called a 'Function Expression'

// In ES6 if we want to create arrow functions. In arrow function we don't have the function keyword, we just have parenthesis.
// we don't have the name of the functions.

// If we have more than one line we've to use flower brackets
// eg: var x = () => {
//                       "Hello World";
//                       "Hello World";
//                   }