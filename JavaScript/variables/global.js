var a = 200;

function f1(){

    console.log("The value of f1 is " + a);
    a = 100;
    // Functions not only access global variable, and also update the global variable.

}

function f2(){

    console.log("THe value of f2 is " + a);
    a = 300;

}

function f3(){

    console.log("The value of f3 is " + a);
}
console.log(a);

f1(); // 200
f2(); // 100
f3(); // 300

// Global variable values can be changed at any location in the application.