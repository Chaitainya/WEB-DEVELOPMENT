// function f1()
// {
//     console.log("line1");
//     console.log("line2");
//     console.log("line3");
//     console.log("line4");
//     console.log("line5");
//     console.log("line6");
// }
// f1();

function* f1()
{
    console.log("line1");
    console.log("line2");
    yield "block-1";
    console.log("line3");
    yield "block-2";
    console.log("line4");
    console.log("line5");
    console.log("line6");
}
var iterator = f1();

iterator.next();

console.log("some code");

iterator.next();

iterator.next();
