// So this variable hosting applies for both local variables and global variables.

// Example for global variables::::::::

console.log(a); //undefined
console.log(b); //undefined

var a = 100,b = 200;

console.log(a+b); // 300






console.log(a); // undefined
console.log(b); // undefined
var a = 100, b = 200;
console.log(c); // undefined
console.log(a + b); //300
var c = 90;                   // Target


console.log(a); // undefined
console.log(b); // undefined
var a = 100, b = 200;
var c = 90;                   // Target
console.log(c); // 90
console.log(a + b); // 300