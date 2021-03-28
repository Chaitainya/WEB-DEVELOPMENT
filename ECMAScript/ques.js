// function f1(a, b)
// {
//     console.log(a); // undefined
//     console.log(b); // undefined
// }
// f1();

// function f1(a = 10, b = 20)
// {
//     console.log(a); // 10
//     console.log(b); // 20
// }
// f1();

function f1(a = 10, b = 20)
{
    console.log(a); // 100
    console.log(b); // 200
}
f1(100, 200);