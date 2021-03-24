var str = "leon@gmail.com";

var pattern = /\d/;

console.log(pattern.test(str)); // false // because there is no digit present in the mailid.

// so

var str = "leon6@gmail.com"; // <--

var pattern = /\d/;

console.log(pattern.test(str)); // true