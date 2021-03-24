var str = "1a223";

var pattern = /HYD[0-9]{2}SPCY/;

console.log(pattern.test(str)); // false

// so

var str = "HYD33SPCY";

var pattern = /HYD[0-9]{2}SPCY/;

console.log(pattern.test(str)); // true