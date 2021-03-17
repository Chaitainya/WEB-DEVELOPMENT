var array = [100, 200, 300, 400, 500, 600, 700, "hai", "hello", "hey"];

array.filter(function(i)
{
    console.log(i);
})


// or


var result = array.filter(function(i)
{
    return i;
})

console.log(result);

// or

var result = array.filter(function(i)
{
    return typeof i == "number"})

console.log(result);

// or

var result = array.filter(function(i)
{
    return typeof i == "string"})

console.log(result);