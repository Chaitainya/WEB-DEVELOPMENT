
var a = 10, b = 20, c = "10";

console.log(a + b + c); // 3010
console.log(a + c + b); // 101020
console.log(c + a + b); // 101020 // Here string is came first so the next number will also convert to string.
// If it is plus it will convert number into string
// If it is minus it will convert string into number.
console.log(c + (a + b)); // 1030

console.log(c - b); // -10 //Other than plus in arthimetic operators the string will convert to number.

var a = 10, b = 20, c = "10", d = "s10";

console.log(a + d); //10s10
console.log(a - d); //NaN: Not a Number

console.log(a + c - d); //NaN