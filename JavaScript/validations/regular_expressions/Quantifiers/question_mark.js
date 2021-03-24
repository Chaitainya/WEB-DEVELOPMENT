var str = "a7";

var pattern = /[a-z]?[0-9]+/;

console.log(pattern.test(str)); // true

var str = "1";

var pattern = /[a-z]?[0-9]+/;

console.log(pattern.test(str)); // true

var str = "a";

var pattern = /[a-z]?[0-9]+/;

console.log(pattern.test(str)); // false

var str = "10";

var pattern = /[a-z]?[0-9]+/;

console.log(pattern.test(str)); // true

var str = "aa";

var pattern = /[a-z]?[0-9]+/;

console.log(pattern.test(str)); // false