var str = "a";

var pattern = /\W/;

console.log(pattern.test(str)); // false // because it expects non word like a special characters.

// so

var str = "a%";

var pattern = /\W/;

console.log(pattern.test(str)); // true