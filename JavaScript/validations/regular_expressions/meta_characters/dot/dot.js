var str = ".";

var pattern = /./; // dot represents a placeholder

console.log(pattern.test(str)); //true

// or

var str = "h";

var pattern = /./;

console.log(pattern.test(str)); // true

// or

var str = " ";

var pattern = /./;

console.log(pattern.test(str)); // true

// or

var str = "";

var pattern = /./;

console.log(pattern.test(str)); // false