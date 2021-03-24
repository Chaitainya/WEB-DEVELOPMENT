var str = "";

var pattern = /\s/;

console.log(pattern.test(str)); // false

// so

var str = " ";

var pattern = /\s/;

console.log(pattern.test(str)); // true