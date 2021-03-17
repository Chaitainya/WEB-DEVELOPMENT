var a = 100; // Global Variable 

// Any function in application can access the global variable, through out the application

function f1(){

    console.log("The value of f1 is " + a); //  Plus is called concatenation
    a = 300;

}

function f2(){

    console.log("The value of f2 is " + a);
    a = 400;

}

function f3(){

    console.log("The value of f3 is " + a);

}

console.log(a);

f1();
f2();
f3();