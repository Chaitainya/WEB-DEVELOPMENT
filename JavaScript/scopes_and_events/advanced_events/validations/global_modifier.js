// find how many times 'l' is repeated

var str = "hello how are you";

var pattern = /l/g;     // <-- 'g' is called as modifier

console.log(str.match(pattern)); // [ 'l', 'l' ]

// or

var str = "hello how are you";

var pattern = /l/g;     // <--

console.log(str.match(pattern).length);     // <-- // 2