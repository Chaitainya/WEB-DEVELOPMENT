// function f1(a)
// {
//     a();
// }

// f1(function() // In JS we can also pass a function as an argument.
// {
//     console.log("Hello! I am in function");
// });

function f1(a)
{
    a();
}
f1(function() // Whenever we're using function is caller, we don't have to specify
              // the function name. Because we're not gonna use that function
              // outside. This is only for the purpose of passing.
{
    console.log(2 * 2);
});