// Create a global variable, and two function and access the global variable.

var age = 24;

function f1(){
    console.log("The age of f1 ia : " + age);
}

function f2(){
    console.log("The age of f2 is : " + age);
}
console.log(age);
f1();
f2();