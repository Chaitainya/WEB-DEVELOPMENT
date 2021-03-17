// >, <, >=, <=, ==, ===, !=, ?:

// The Comparision Operators will always return a boolean value.

var a = 10, b = 20, c = 9;

console.log(a < b); // true
console.log(a > b); // false
console.log(a >= b); // false

var a = 10, b = 20, c = 9, d = 10, e = "10";

console.log(a == d); // true
console.log(a == e); // true // double equalsto will check for only content. content is same right 10 & 10.
console.log(a === e); // checks for type and data.
console.log(a != b); // Not equals to

//ternary operator
var result = a < b ? "a < b" : "a > b";
console.log(result); // a < b