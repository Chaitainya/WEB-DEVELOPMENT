// Write a pattern that checks the following mail extention

// pattern should have ".com"

// eg: ravi@gmail.com  ram@gmail.com  abc.com

var str = "leon@gmail.com";

var pattern = /.com/;

console.log(pattern.test(str)); // true

// or

var str = "leon@gmail.cm"; // <--

var pattern = /.com/;

console.log(pattern.test(str)); // false

// or

var str = "leon@gmailcom"; // <--

var pattern = /.com/;

console.log(pattern.test(str)); // true // because '.' is a placeholder, so in the place of dot we can have anything like lcom or mcom anything.\

// so we can use brackets to solve this problem

var str = "leon@gmailcom";

var pattern = /[.]com/;

console.log(pattern.test(str)); // false

// the right one is

var str = "leon@gmail.com";

var pattern = /[.]com/;

console.log(pattern.test(str)); // true