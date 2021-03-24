var str = "a";

var pattern = /[a-z]+/;

console.log(pattern.test(str)); // means atleast one alphabet

// or

var str = "aaaaaaaa";

var pattern = /[a-z]+/;

console.log(pattern.test(str)); // true

// and

var str = "4";

var pattern = /[0-9]+/;

console.log(pattern.test(str)); // true

// or

var str = "1234567789";

var pattern = /[0-9]+/;

console.log(pattern.test(str)); // true

// and

var str = "a";

var pattern = /[a-z]+[0-9]+/;

console.log(pattern.test(str)); // false

// so

var str = "a7";

var pattern = /[a-z]+[0-9]+/; // means atlest one alphabet and one number

console.log(pattern.test(str)); // true