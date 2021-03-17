function f1(x) // 'f1' is called as "First Class Function"
{
    x();
}

f1(function()
{
    console.log("Hello! I am function");
})

// or

function f1(x) // 'f1' is called as "First Class Function"
{
    x();
}

var y = function() // function expression
{
    console.log("Hello! I am function");
}

f1(y);


// This called anonymous function
// y = function()
// {
//   console.log("Hello! I am function");
// }

// This is called function expression
// var y = function() // function expression
// {
//     console.log("Hello! I am function");
// }

// So, combination of 'anonymous function' and 'function expression' can help us with "First Class Functions"