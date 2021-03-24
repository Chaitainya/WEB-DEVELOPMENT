var str = "17";

var pattern = /[0-9]{3}/;

console.log(pattern.test(str)); // false

var str = "10";

var pattern = /[0-9]{2}/;

console.log(pattern.test(str)); // true

var str = "1a0";

var pattern = /[0-9]{2}/;

console.log(pattern.test(str)); // false

var str = "1a0";

var pattern = /[0-9]{1}/;

console.log(pattern.test(str)); // true


var str = "1a0";

var pattern = /[a-z][0-9]{2}/;

console.log(pattern.test(str)); // false