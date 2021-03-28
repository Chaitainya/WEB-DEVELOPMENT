function f1()
{
    var a = 100;
    if(a > 10)
    {
        var a = 900;
        console.log(a); // 900
    }
    console.log(a); // 900
}
f1();