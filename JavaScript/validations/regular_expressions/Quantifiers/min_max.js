var str = "1a2";

var pattern = /[0-9]{1,3}/;

console.log(pattern.test(str)); // true

var str = "1a2";

var pattern = /[0-9]{2,3}/;

console.log(pattern.test(str)); // false

var str = "1a22";

var pattern = /[0-9]{2,3}/;

console.log(pattern.test(str)); // true

var str = "1a223";

var pattern = /[0-9]{2,3}/;

console.log(pattern.test(str)); // true