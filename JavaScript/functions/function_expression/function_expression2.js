function f1(a)
{
    a();
}

function f2(b)
{
    b();
}

var x = function()
{
    console.log("Hola Amigo");
}

f1(x);
f2(x);

x = null; // Once you called a function expression, you must remove it by null.

console.log(x);


// If don't use function expression, we need to use more functions.

// function f1(a)
// {
//     a();
// }

// function f2(b)
// {
//     b();
// }

// f1(function()
// {
//     console.log("Hello 1");
// });

// f2(function()
// {
//     console.log("Hello 2");
// })