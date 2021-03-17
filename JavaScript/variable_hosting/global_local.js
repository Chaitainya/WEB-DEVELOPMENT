var b = 8, c = 9; // global variables

function f1(){

    var a = 10;
    console.log(a); // 10
    console.log(b); // undefined
    console.log(c); // undefined
    var b = 90, c = 100; // local variables
    console.log(b); // 90

}
f1();

// var b,c;
// b = 8;
// c = 9;
// function f1(){
//     var a,b,c;
//     a = 10;
//     console.log(a); // 10
//     console.log(b); // undefined
//     console.log(c); // undefined
//     b = 90, c = 100;
//     connsole.log(b); // 90
// }
// f1();


// var b = 8,c = 9;
// function f1(){
//     var a = 10;
//     console.log(a); // 10
//     console.log(b); // 8
//     console.log(c); // 9
//     console.log(b); // 8
// }
// f1();