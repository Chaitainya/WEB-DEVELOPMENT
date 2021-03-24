var str = "a";

var pattern = /\w/;

console.log(pattern.test(str)); // true

// or

var str = "1";

var pattern = /\w/;

console.log(pattern.test(str)); // true

// or

var str = "_"; // only underscore a special character it basically allows

var pattern = /\w/;

console.log(pattern.test(str)); // true

// test

var str = "%";

var pattern = /\w/;

console.log(pattern.test(str)); // false