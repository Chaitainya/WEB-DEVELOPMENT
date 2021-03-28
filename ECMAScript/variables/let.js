// In case if we want to create a variable, that is specific only to the block.

function f1()
{
    var a = 100;
    if(a > 10)
    {
        let a = 900; // block scope variable
        console.log(a); // 900 // which means this will not participate in variable hosting.
    }
    console.log(a); // 100
}
f1();