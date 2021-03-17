var a = 10, b = 20;

function f1(x, y)
{
    console.log("x", x); // undefined
    console.log("y", y); // undefined

    x = 90;
    y = 100;
}

f1(a, b);

console.log(a); // 10
console.log(b); // 20