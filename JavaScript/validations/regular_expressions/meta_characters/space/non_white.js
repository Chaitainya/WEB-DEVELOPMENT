var str = " ";

var pattern = /\S/;

console.log(pattern.test(str)); // false

// so

var str = "";

var pattern = /\S/;

console.log(pattern.test(str)); // false // because other space anything it will give true.

// like

var str = "lee";

var pattern = /\S/;

console.log(pattern.test(str)); // true