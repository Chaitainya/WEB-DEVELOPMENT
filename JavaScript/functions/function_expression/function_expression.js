// If we can refer a function with a variable, then it is known as function
// expression.

function f1(a)
{
    a();
}

var x = function() // Function Expression & the function without name is called
                   // Anonymous Function
{
    console.log("Hello! I am a function");
}

f1(x);