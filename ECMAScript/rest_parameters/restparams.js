function f1(a, b)
{
    console.log(a, b); // 10 20
}
f1(10, 20, 40, 50);

// so my idea

function f1(a, b)
{
    console.log(a, b, c, d); // 10 20 40 50
}
f1(10, 20, c = 40, d = 50);

// actually

function f1(a, b)
{
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);

}
f1(10, 20, 40, 50);

// rest parameters

function f1(a, b,...restparams)
{
    console.log(restparams);
    restparams.forEach(function(e)
    {
        console.log(e);
    })
}
f1(10, 20, 40, 50);