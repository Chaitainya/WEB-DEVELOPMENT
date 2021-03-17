// Logical Operators:

// AND(&&)

// OR(||)

// NOT(!)

var a = 10, b = 20, c = 30;

console.log(a < b && a < c); // True

console.log(a > b && a < c); // False //because when we use && both should be true otherwise output leads to false.


console.log(a > b || a < c); // True //Because whenever we use || atleast one should be true then only output will be true or else false.


console.log(!(a > b)); // True
console.log(!(a < b)); // False