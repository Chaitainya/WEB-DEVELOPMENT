var str = "10";

var pattern = /[a-z]*[0-9]+/;

console.log(pattern.test(str)); // true

var str = "9";

var pattern = /[a-z]*[0-9]+/;

console.log(pattern.test(str)); // true

var str = "a7";

var pattern = /[a-z]*[0-9]+/;

console.log(pattern.test(str)); // true

var str = "a";

var pattern = /[a-z]*[0-9]+/;

console.log(pattern.test(str)); // false

var str = "a";

var pattern = /[0-9]*[a-z]+/;

console.log(pattern.test(str)); // true

var str = "8";

var pattern = /[0-9]*[a-z]+/;

console.log(pattern.test(str)); // false