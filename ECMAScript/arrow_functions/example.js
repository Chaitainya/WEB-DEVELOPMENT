// Normal Function:

function square(input)
{
    return input * input
}
console.log(square(4)); // 16


// Arrow Function:

var square = input => input * input; // if we've only one parameter, we don't have to use parenthesis.
console.log(square(4)); // 16